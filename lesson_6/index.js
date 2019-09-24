const 
    div = document.createElement('div'),
    button =  document.createElement('button'),
    x=document.createElement('canvas'),
    ctx = x.getContext('2d'),
    hey=document.createElement('canvas'),
    hctx = hey.getContext('2d');

button.innerText = 'Open';
document.body.appendChild(button);

div.setAttribute('class', 'one');
document.body.appendChild(div);

x.setAttribute('class', 'x');
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 30;
    ctx.beginPath();
    ctx.moveTo(0,0)
    ctx.lineTo(300,150);
    ctx.moveTo(300,0)
    ctx.lineTo(0,150);
    ctx.stroke()
div.appendChild(x);

hey.width = 300;
hey.height = 300;
hctx.font = 'bold 100px cursive';

let grad=hctx.createLinearGradient(0,0,300,0);
grad.addColorStop(0,"magenta");
grad.addColorStop(0.5,"blue");
grad.addColorStop(1,"red");

hctx.fillStyle = grad;
hctx.textAlign = 'center';
hctx.fillText('Hey!', hey.width/2, 180);

div.appendChild(hey);



button.addEventListener('click',()=>{
    div.style.display = 'block';
    div.style.opacity = '1';
    setTimeout(()=>{
        div.style.animation = 'grad 10s infinite linear';
    },700);

})


x.addEventListener('click',()=>{
    div.style.opacity = '0';
    setTimeout(()=>{
        div.style.display = 'none';
        div.style.animation = '';
    },1000);
})