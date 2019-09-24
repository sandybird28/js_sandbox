//1
function removeKeys(obj,arr){

    arr.forEach(key => {
        delete obj[key];
    });

    return obj
}

//2

function clearNumbers(arr){
    arr.forEach(arrIn =>{
        for(i=arrIn.length-1; i>=0; i--){
            if(typeof arrIn[i] !== "number" ||  isNaN(arrIn[i]) ){
                arrIn.splice(i, 1);
            };
        };
    });
    return arr
}

//3

function reverse(...str){
    let rewStr = [];
    for(str2 of str){
        rewStr.push(str2.split('').reverse().join(''));
    }
    return rewStr.reverse()
}



//4*
function join(...arg){
    let res ={};
    let val;

    arg.forEach(element => {
        if(typeof element == "object"){
            for(key in element){
                val = element[key];
                    switch (typeof val) {
                        case 'object':
                            if(Array.isArray(val)){
                                if(typeof res[key] == "undefined"){
                                    res[key]=val
                                } else{ 
                                    for(i = 0 ; i < val.length ; i++){
                                        res[key].push(val[i]); 
                                }}
                            }                            
                            break;
                        case 'number':
                            if(isNaN(val)|| val == Infinity || val == -Infinity){
                                break;
                            }else{
                                if(typeof res[key] == "undefined"){
                                    res[key]=val
                                } else{
                                    res[key]+=val
                                }
                            };
                            break;
                        case 'string': 
                            if(typeof res[key] == "undefined"){
                                res[key]=val
                            } else{
                                res[key]+=val
                            }                   
                        default:                         
                            break;
                    }
                }
        }
    });    

    return res
}
