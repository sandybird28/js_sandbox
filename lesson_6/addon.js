'use strict';

function print(n){
    let str='\n';
    for(let i=0, i2=(2*(n-1)-1);i<n;i++,(i2=i2-2)){
        if(i){str += ' '.repeat(i)} 
        str += '*'
        if(i2>0){
            str += ' '.repeat(i2)+'*\n'
        } else{
            str += '\n'
        }    
    }
    return str
}
function printMirror(n){
    let str='\n';
    for(let i=n-1, i2=0;i>0;i--,(i2+=2)){
        if(i){str += ' '.repeat(i)} 
        str += '*'

        if(i2>0){
            str += ' '.repeat(i2-1)+'*'
        } 

        if(i){str += ' '.repeat(2*i)} 
        str += '*'

        if(i2>0){
            str += ' '.repeat(i2-1)+'*\n'
        } else{
            str += '\n'
        }

    }


    for(let i=0, i2=(2*(n-1)-1);i<n;i++,(i2=i2-2)){
        if(i){str += ' '.repeat(i)} 
        str += '*'
        if(i2>0){
            str += ' '.repeat(i2)+'*'
        } 

        if(i){str += ' '.repeat(i*2)} 
        str += '*'
        if(i2>0){
            str += ' '.repeat(i2)+'*\n'
        } else{
            str += '\n'
        }    
    }
    return str
}

module.exports.print = print;
module.exports.printMirror = printMirror;