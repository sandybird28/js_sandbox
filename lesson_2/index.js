//1
function makeGreetings(age){
    function end(age) {
        if (age < 10 || age > 20) {
            switch (age % 10) {
                case 1: return 'год';
                case 2:
                case 3:
                case 4: return 'года';
                default: return 'лет';
            }
        } else{
            return 'лет';
        };        
    }
    return 'Мой возраст '+age+' '+end(age);
}

//2
function splitArray(arr, b){
    let splitArr = [];
    while (arr.length>0){
        splitArr.push(arr.splice(0,b))
    }
    return splitArr;
}

//3
function add(x){
    return function(y){
        return x+y;
    }
}

//4
function transformData(arr){
    let obj={};
    for(i=0;i<arr.length;i++){
        if(arr[i].mark>5){
            ((arr[i].lastName)&&(arr[i].firstName))? obj[arr[i].login]= arr[i].firstName+' '+arr[i].lastName: obj[arr[i].login]= arr[i].firstName+arr[i].lastName;
        }
    }
   return obj;
}

//5
function addInfinite(x){
    f.result = x;
    function f(y){
        f.result += y;
        return f
    };
    return f
}