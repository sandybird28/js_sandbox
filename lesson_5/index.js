//1
function makeImages(...args){
   args.forEach(el => {
    let 
        div = document.createElement('div'),
        img = document.createElement('img');

    document.body.append(div);
    div.append(img);
    img.setAttribute("src", el);   
    }); 
}

//2
class FormBuilder{
    constructor(){
        this.form = document.createElement('form')
    }
    appendTo(target){
        target.appendChild(this.form)
    }
    addInput(name){
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', name);
        this.form.appendChild(input)
  
    }
    addCheckbox(name){
        let cb = document.createElement('input');
        cb.setAttribute('type', 'checkbox');
        cb.setAttribute('name', name);
        this.form.appendChild(cb)
    }
    addButton(name){
        let b = document.createElement('button');
        b.innerText = name;
        this.form.appendChild(b) 
    }
    destroy(){
        this.form.parentElement.removeChild(this.form)
    }
}
//3