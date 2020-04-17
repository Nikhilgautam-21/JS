# Objects

###### These are "containers" for related information.

### There are multiple ways to build objects

1. #### Object literal

```javascript
var booksArray = ["Peter Pan", "Da Vinci Code"]
var myBox = {
			height: 6,
			width: 8,
			length: 10,
			volume: 480,
	:,		material: "cardboard",
			contents: booksArray
	};
```
**Note**:  You can use brackets [ ] to define a prooperty with spaces. For eg. myBox[" # of  stops"]

-----
### Funtionality in Objects

Let's say we have an aquarium object:
```javascript
var  aquarium = {
	Nemo: { type: "fish", species: "clownfish", length :3.7  }
	"Coral Castle": { type: "environment", material: "coquina", moves: false }
}
```
And we have this function to add properties dynamically to an object: 

```javascript
function addCritter(container, name, type, species, length){
	container[name] =  {type:type,species: species, length: length}
}
```
Adding this function as property to above object: 

```javascript
var  aquarium = {
    Nemo: { type: "fish", species: "clownfish", length :3.7  }
    "Coral Castle": { type: "environment", material: "coquina", moves: false },
	addCritter: function(type, species, length){
		this[name] = {type: type, species: species, length: length} // adds new property with key "name"
	}
}
```
