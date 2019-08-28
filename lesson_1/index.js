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
            return 'лет'
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
        return x+y
    }
}