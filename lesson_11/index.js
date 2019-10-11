const apiSrc =[
    'https://api.2ip.ua/geo.json?ip=',
    'http://ip-api.com/json/',
    'http://free.ipwhois.io/json/'
],
    go = document.getElementById('go'),
    preloader = document.getElementById('preloader'),
    info = document.getElementById('info'),
    error = document.getElementById('error');


function hideEl(...elem){
    elem.forEach(el=> el.hidden = true);
};
function showEl(...elem){
    elem.forEach(el=> el.hidden = false);
};

function findIp(src){
    return  fetch(src)
                .then(response => response.json())
                .then(data => {
                    //find ip in data values  
                    return getIpFrom(data)
                })
}

function getIpFrom(obj){
    let ip;
    Object.values(obj).forEach(el => {
        if(/([0-9]{1,3}[\.]){3}[0-9]{1,3}/.test(el)){
           ip = el
        }
    });
    return ip
}

function findLocation(ip){
    // console.log(ip)
    return  fetch(`https://api.jsonbin.io/g/${ip}`)
                .then(response => response.json())
                .then(data =>{
                    if(data.success){
                        return(data)
                    }else{
                        showError(data.message)
                    }
                })
}

function showLocalion(data){
    //add iformation on page
    hideEl(preloader);
    showEl(info);
    info.textContent = `city: ${data.city}, country: ${data.country}, region: ${data.region}`;
    showButtonsOn(info);
    go.disabled = false;


}


function showError(err){
    //add error iformation on page
    hideEl(preloader);
    showEl(error);
    error.style.borderColor = '#ea4235';
    error.style.color = '#ea4235';
    error.textContent +=`\n${err}`;
    showButtonsOn(error);
    go.disabled = false;

}

function showButtonsOn(el){
const hide = document.createElement('button');

    hide.textContent = 'hide';
    hide.onclick = () =>hideEl(info, error);
    el.appendChild(hide);
}

function findMe(){
    go.disabled = true
    hideEl(info, error);
    showEl(preloader);
    Promise.race([findIp(apiSrc[0]),findIp(apiSrc[1]),findIp(apiSrc[2])])
        .then(ip => findLocation(ip))
        .then(data => showLocalion(data.data))
        .catch(err => showError(err));

}        

go.onclick = findMe;