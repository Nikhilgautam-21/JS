// Ex 1. Counter Example (Basic)

function counter(){
    var counter =0;
    function increment(){
        return counter = counter+1
    }

    return increment;
}

var cnter = counter();
console.log(cnter()) // 1
console.log(cnter()) // 2

// Ex 2. Closures within a loop (Tricky)

function outer(){

    var arr = []
    var i;
    for(let i=0;i <4 ;i++){
        arr[i] =  function() { return i; }
    }
    return arr;
}

var get_arr = outer();
console.log(get_arr[0]()); // 4
console.log(get_arr[1]()); // 4
console.log(get_arr[2]()); // 4
console.log(get_arr[3]()); // 4

/* 
Explaination:
    We created four closures in above example which point to var i.
    Closures don't remember the value of var, it only points to the var or stores the reference of var, hence it returns the current value.
*/

// Ex 2 .Correct way

function outer()  
{ 
    function create_Closure(val)  
    { 
        return function()  
        { 
            return val; 
        } 
    } 
    var arr = []; 
    var i; 
    for (i = 0; i < 4; i++)  
    { 
        arr[i] = create_Closure(i); 
    } 
    return arr; 
} 
var get_arr = outer(); 
console.log(get_arr[0]()); 
console.log(get_arr[1]()); 
console.log(get_arr[2]()); 
console.log(get_arr[3]());

/* 
Explanation: 
    In the above code we are updating the argument of the function create_Closure with every call. 
    Hence, we get different values of i at different index.
*/