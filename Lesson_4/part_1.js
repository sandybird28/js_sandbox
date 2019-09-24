//1
function mask(str){
    let sl=str.length;
    if(sl > 6 && sl < 11){
        let arr = str.split('');
        for (i = sl - 5; i >= 0; i--){
            arr[i] = '*';
        };
        str = arr.join('');
        return str
    }
}

//2
const add = (a) => {
    let sum = a;
    const func = (b) => {
        if (b) {
            sum += b;
            return  func
        }else {
            return sum;       
            }
    };
    func.toString = () => {return sum;};
    return func;
}

// 3
function flatArray(arr){
    let res = [];
    function isArr (arr2){
        arr2.forEach(el => {
            Array.isArray(el) ? isArr(el) : res.push(el)
        });
    }
    isArr(arr)
    return res
}

//4
function findDuplicate(arr){
    let el;
    arr.reduce(function(pv, cv){
        if((cv-pv) == 0){
            el = cv;
            return cv;
        } else{
            return cv;
        }
        
    });
    return el
}


//5

function findMaxChainSum(arr){
    let res = 0, sum = 0, chain =[], mChain;
    for (i = 0;i < arr.length; i++ ){
        for (n = i;n < arr.length; n++ ){
            sum += arr[n];
            chain.push(arr[n])
            if (sum > res){
                res = sum;
                mChain = chain.concat(); 
            } 
        };
        sum = 0;
        chain =[];
    }; 
    return [res, mChain]
}


function maxChainSum(arr){
    let res =findMaxChainSum(arr);
    return res[0];
}

//5 *
function maxChain(arr){
    let res =findMaxChainSum(arr);
    return res[1];
}
