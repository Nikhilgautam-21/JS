# Prototypes

#### A Protytpe is like a blueprint of the object that we are trying to create.

All the objects that we create have some special property as well such as:
- valueOf
- constructor
- toLocalString
- toString
- isPrototypeOf
- propertyIsEnumberable
- hasOwnProperty

All of these object have a "parent" object that gives them properties. This parent is **Prototype**
And this passing of property from parent to children is called **Inheritance**

### Adding Inheritable properties to prototypes

Example:  
Let's say we want to count number of A's in a string. But this property does not exist already on the string prototype. We have to add it.

```javascript
var s1 = "This is an apple but you have not eaten it yet"
var s2 = "Because I want to eat something else"

String.prototype.countAll =  function ( letter ) {
		var letterCount = 0;
		for(let i=0; i<this.length;i++){
	 		if(this.charAt(i).toLowerCase() == letter.toLowerCase() ){
				letterCount +=1;
			}
		}
	return letterCount;
	}

console.log(s1.countAll('a')) // 4
```

### Second way to create Objects using Object.create() 

Using Inheritance we can create new Objects with our existing Objects as prototypes.
```javascript
var shoe = { length:8, color: "black", type: "sneakers" }

var newShoe = Object.create(shoe)

console.log(newShoe) //   { length:8, color: "black", type: "sneakers" }
//The new Object will inherit all properties

// Object.prototype.isPrototypeOf("shoe") --> return true
```

### Creating common properties of protoypes using constructor

```javascript
function Shoe (shoeSize, shoeColor, forGender, constructStyle ){
	this.size = shoeSize;
	this.color  = shoeColor;
	this.gender = forGender;
	this.construction = constructStyle;
	
	this.putOn = function(){ console.log("Shoe's On") }
}
var beachShoes = new Shoe(12."black","men", "flipflop")

```

But we have not really implemented the protoypical inheritance, we have just built a constructor.
Here's how we going to do it.

```javascript
function Shoe (shoeSize, shoeColor, forGender, constructStyle ){
    this.size = shoeSize;
    this.color  = shoeColor;
    this.gender = forGender;
    this.construction = constructStyle;
}

Shoe.prototype = {
	putOn : function(){ console.log("Shoe's On") }
	putOff: functio() { console.log("Shoe's Off") }
}

var beachShoe  =  new Shoe(12, "black", "women", "flipflop")
beachShoe.puOn() //  alerts "Shoe's On"
```

### Useful properties in the Object Prototype

###### valueOf()

```javascript
var x = 4;
var y = "4"

x.valueOf() == y.valueOf() 				// true
x.valueOf() ===  y.valueOf() 			// false
```

###### toString()
```javascript
var a = [2, "mice","3"];
a.toString(); // "2,mice,3"
```
###### hasOwnProperty()
```javascript
var x = {
	length: 6,
	weight: 12
}

x.hasOwnProperty('length') // true
```
