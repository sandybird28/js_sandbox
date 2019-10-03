//1

const block = document.getElementById('block');
block.style.height = `${window.innerHeight*2}px`;

function waitForScroll() {
    return new Promise ((resolve) => {
        let scr = false;
        function scrolled(){
            scr = true;
            if(scr){
                resolve();
            }

        }
        window.addEventListener('scroll', scrolled) 
    });
}

function drawOnScroll(){
    waitForScroll()
        .then(() => block.style.backgroundColor = `rgb(${(~~(Math.random()*255))},${(~~(Math.random()*255))},${(~~(Math.random()*255))})`);
};


//2

function setText(text){
    block.textContent = text;
}

function waitForAnswer(){
    return new Promise ((resolve, reject) => {
        document.removeEventListener('keydown', waitForAnswer);
        switch (event.code) {
            case 'KeyY':
                resolve(setText('Так держать!'))
                break;
            case 'KeyN':
                reject(setText('Нужно подтянуть('))
                break;
        }
    });
}

block.textContent = 'Вы сделали домашнее задание? Y / N';

document.addEventListener('keydown', waitForAnswer);




//3*

function waitForTime(sec){
    const ms = sec * 1000
    return new Promise((resolve) => {
        setTimeout(
            ()=>{
                resolve('100 кликов вне очереди.')},
            ms,
            )
    });
}

function waitForClicks(num){
    return new Promise((resolve)=>{ 
        let count = 0;
        function countClicks(){
            count += 1; 
            if(count == num){
                document.removeEventListener('click',countClicks);
                resolve('Good job, comrade.');
                }} 
        document.addEventListener('click',countClicks)
   })
}

function clickChallang(click, sec) {
    setText(`У вас есть ${sec} секунд, чтобы сделать ${click} кликов`);
    Promise.race([waitForTime(sec),waitForClicks(click)]).then((text)=>setText(text))
}

