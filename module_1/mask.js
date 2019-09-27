import MaskInput from 'mask-input';

class MaskedInput{
    constructor(){
        const input =document.createElement('input');
        input.setAttribute('id','binput');
        input.onkeydown = ()=>{
            input.removeAttribute('id')
        }
        document.body.appendChild(input);
        const maskInput = new MaskInput(input, {
        mask: '0000-0000-0000-0000',
        alwaysShowMask: true,
        maskChar: '_',
        });
        

    }
} 

module.exports = MaskedInput;
