# Hoisting
First, memory is set aside for all necessary variable and declared functions.
For example:

```javascript
function sumOfSquares(a,b){
	var x = add(a*a, b*b);
	return x;
	function add(c,d){
		var a = c+d;
		return a;
	}
}
```
The above program will be compiled to
```javascript
function sumOfSquares(a,b){
	var x = undefined;
	function add(c,d){
		var a = c+d;
		return a;
	}
	x = add(a*a, b*b)
	return x;
}
```

## Some examples of impact of hoisting
Case 1:
```javascript
function getMysteryNumber(){
	function  chooseMystery(){T
		return 12;
	}
	return chooseMystery();
	function chooseMystery(){
	 return  7;
	}
}
```
This will translate to something like this:

```javascript
function getMysteryNumber(){
	function  chooseMystery(){
		return 12;
	}
	function chooseMystery(){
		 return  7;
	}
	return chooseMystery();
}
```
**The chooseMystery method will get overridden by last chooseMystery function and hence calling the function will return 7.**

### Note : Function Expressions are never hoisted


```javascript
function chooseNumber {
  var chooseMystery = function(){
	return 12;
  }
  return chooseMystery();
	
	var chooseMystery = function(){
		return 7;
	}
}

// This will be translated to

function chooseNumber {
	var chooseMystery = undefined;
	var chooseMystery = undefined; // override above line
	
	chooseMystery = function(){
	return 12;
  }
  return chooseMystery();
	
	chooseMystery = function(){   // it will never reach here
		return 7;
	}
}

// Hence it will return 12;
```

### Just another case

```javascript
function chooseNumber {
    return chooseMystery();
	var chooseMystery = function(){
    return 12;
  }
    var chooseMystery = function(){
        return 7;
    }
}
// This will be translated to
function chooseNumber {
    var chooseMystery = undefined ; 
    var chooseMystery = undefined;
	
	 return chooseMystery();
	// Below code is unaccessible now, hence it will return an ERROR
    chooseMystery = function(){
    return 12;
  }
    chooseMystery = function(){  
        return 7;
    }
}
```