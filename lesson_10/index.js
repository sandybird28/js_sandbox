'use strict';
import MaskInput from 'mask-input';

const go = document.getElementById('go'),
    inp = document.getElementById('inp'),
    cur1 = document.getElementById('cur1'),
    cur2 = document.getElementById('cur2'),
    span = document.getElementById('span'),
    cur1h = document.getElementById('cur1h'),
    cur2h = document.getElementById('cur2h'),
    start = document.getElementById('start'),
    end = document.getElementById('end'),
    go2 = document.getElementById('go2'),
    hist = document.getElementById('hist'),
    close = document.createElement('button'),
    br =  document.createElement('br'),
    graph = document.createElement('canvas'),
    grc = graph.getContext("2d");

new MaskInput(start, {
    mask: '0000-00-00',
    alwaysShowMask: false,
  });
new MaskInput(end, {
    mask: '0000-00-00',
    alwaysShowMask: false,
  });
new MaskInput(inp, {
    mask: '000000',
    alwaysShowMask: false,
  });

 function calculation(){
    return fetch(`https://api.exchangeratesapi.io/latest?base=${cur1.value}&symbols=${cur2.value}`)
    .then((resp)=>resp.json())
    .then((b)=>{
    let res = ~~((inp.value * b.rates[cur2.value])*100)/100;
    span.textContent = `${inp.value} ${cur1.value} = ${res} ${cur2.value}`
});}


function makeGpaph(g){

    graph.width = 600;
    graph.height = 300;
    hist.appendChild(graph);

    const x0 = 45;
    const y0 = 5;
    const width = graph.width - 45;
    const height = graph.height - 25;
    grc.strokeStyle = '#fff';
    grc.fillStyle = '#fff';
    grc.font = 'bold 15px sans-serif';
    grc.lineWidth = 5;
    grc.beginPath();
    grc.moveTo(x0, y0);
    grc.lineTo(x0, height + y0);
    grc.lineTo(width + x0, height + y0);
    grc.stroke();
    grc.closePath();

    let g_min = g[0],
        g_max = 0;

    g.forEach((el) => {
        if (el > g_max) {
            g_max = el
        }
        if (el < g_min) {
            g_min = el
        }
    });

    grc.beginPath();
    grc.moveTo(x0, height + y0);
    grc.lineTo(x0, height + y0 + 10)
    grc.fillText(start.value, x0+3, height + y0 + 15);
    grc.moveTo(width + x0, height + y0);
    grc.lineTo(width + x0, height + y0 + 10);
    grc.fillText(end.value, width + x0 - 85, height + y0 + 15);
    grc.moveTo(x0+3, y0);
    grc.lineTo(x0 - 10, y0);
    grc.fillText(~~(g_max * 1000) / 1000, 1, y0 + 15);
    grc.moveTo(x0, y0 + height);
    grc.lineTo(x0 - 10, y0 + height);
    grc.fillText(~~(g_min * 1000) / 1000, 1, y0 + height - 5);
    grc.stroke();
    grc.closePath();


    grc.beginPath();
    const xStep = Math.round(width / (g.length - 1)),
        yStep = height / (g_max - g_min);

    g.forEach((el, i) => {
        let x = x0 + ((i) * xStep),
            y = y0 + ((g_max - el) * yStep);
        if (i == 0) {
            grc.moveTo(x, y);
        } else {
            grc.lineTo(x, y);
        }


    })
    grc.lineWidth = 3;
    grc.lineWidth = 5;

    grc.stroke();
    grc.closePath();

    close.setAttribute('id','close');
    close.textContent = 'закрыть';
    close.onclick = clearGraph;
    hist.appendChild(br);
    hist.appendChild(close);
}

function clearGraph(){
    hist.removeChild(graph);
    hist.removeChild(br);
    hist.removeChild(close);
}


function gr(){   
    return fetch(`https://api.exchangeratesapi.io/history?start_at=${start.value}&end_at=${end.value}&base=${cur1h.value}&symbols=${cur2h.value}`)
    .then((resp)=>resp.json())
    .then((h)=>{
        let g = [];
            Object.keys(h.rates).sort().forEach(el=>{
                g.push(h.rates[el][cur2h.value]);
            })
        return g})
    .then((g)=>{
        makeGpaph(g)
    });


}

go.onclick = calculation
go2.onclick = gr