# Closures

Closure is a **combination of functions bundled together** with its reference to its surrounding state (or lexical environment). In other words, a **closure gives you access to an outer function’s scope from an inner function**. In JavaScript, closures are created every time a function is created, at function creation time.

    function foo(outer_arg) { 
      function inner(inner_arg) { 
            return outer_arg + inner_arg; 
        } 
        return inner; 
    } 
    var get_func_inner = foo(5); 
      
    console.log(get_func_inner(4)); 
    console.log(get_func_inner(3));

## Notes :

 - Outer function return the reference to ther inner function.
 - As per the closure definition, if inner function access the variables of outer function then only it is called closure.
## When to use Closures
Closure is useful in hiding implementation detail in JavaScript. In other words, it can be useful to create private variables or functions.


    var counter = (function() {
      var privateCounter = 0;
      function changeBy(val) {
        privateCounter += val;
      }
      return {
        increment: function() {
          changeBy(1);
        },
        decrement: function() {
          changeBy(-1);
        },
        value: function() {
          return privateCounter;
        }
      };   
    })();
    
    alert(counter.value()); // 0
    counter.increment();
    counter.increment();
    alert(counter.value()); // 2
    counter.decrement();
    alert(counter.value()); // 1

In the above example, increment(), decrement() and value() becomes public function because they are included in the return object, whereas changeBy() function becomes private function because it is not returned and only used internally by increment() and decrement().
