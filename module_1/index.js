//1
function matrixDiff(m1,m2){
    let res = 0;
    m1.forEach((el,i)=> {
        el.forEach((num, j)=>{
            res += Math.abs(num - m2[i][j])
        })
    });
    return res;
};

//2

function strangeSearch(words){
    words.forEach((word,ind)=>{
        const inp = document.createElement('input'),
              text = document.createElement('span'),
              br = document.createElement('br');

        inp.setAttribute('type','number');
        inp.setAttribute('word',word)
        inp.value = 0;
        inp.setAttribute('id',ind)

        document.body.append(inp);
        text.textContent = word;
        document.body.append(text);
        document.body.append(br);
    });
    const search =  document.createElement('button');
    search.textContent = 'Search';
    search.setAttribute('id','go');
    let str = 'https://www.youtube.com/results?search_query=';
    for(i=words.length;i>0;i -=1){
        if (document.getElementById(i) !== null){

            let w = document.getElementById(i).getAttribute('word')
            str +=`${w}+`;
        }
    }
    

    search.addEventListener('click',()=>{


        window.location = str
    });


    document.body.append(search);
};

//3
const input = new (require('./mask'))

//4

function stickyСat(){
    const div = document.createElement('div');
    div.setAttribute('class', 'cat');
    document.addEventListener('mousemove',(event)=>{
        div.style.top = `${event.clientY}px`;
        div.style.left = `${event.clientX}px`; 
    });


    document.body.appendChild(div)
};

function  unstickTheСat(){
    let cats = document.getElementsByClassName('cat');
    for(i=cats.length-1;i>=0;i--){
        cats[i].remove()
    }
}
