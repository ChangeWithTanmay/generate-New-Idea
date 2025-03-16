# generate-New-Idea

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/ChangeWithTanmay/generate-New-Idea)

# Map in JavaScript.
### Declaration:
```javascript
const fruits = new Map();
```
##### Other way to Create Map.
```javascript
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
```

### Creating a new Map object
Creating a new Map object and add elements with the set() method.

#### 📌 Same Object not to be created. ```javascript fruits.set("91345678912","345612"); ``` only chenge value. 
```javascript
fruits.set("91123456789","123456");
fruits.set("91234567891","234561");
fruits.set("91345678912","345612");
fruits.set("91345678912","345613"); 
```
##### Output
```output
Map(3) {
'91123456789' => '123456',
'91234567891' => '234561',
'91345678912' => '345613'
}
```

### Clear All Map Value
The clear() method removes all the elements from a map.
```javascript
fruits.clear();
```
##### Output
```bash
Map(0){}
```
### Delete any spcific value
The delete() method deletes an element from a map.
```javascript
fruits.delete("apples");
```
### JavaScript Map entries()
1. **The entries() method returns an iterator object with the [key,values] in a map.**
2. **The entries() method does not change the original map.**
```javascript
let text = "";
for (const x of fruits.entries()) {
  text += x;
}
console.log(text);
```
#### output
```
apples,500bananas,300oranges,20091123456789,12345691234567891,23456191345678912,345613 
```

### JavaScript Map forEach()
It is Similerly, forEach()
```javascript
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})

console.log(text);
```
#### output
```
apples = 500bananas = 300oranges = 20091123456789 = 12345691234567891 = 23456191345678912 = 345613
```

### JavaScript Map get()
The get() method gets the value of a key in a map.

```javascript
let value = fruits.get("apples");
console.log(value);
```
* **output**
```
500
```

### javaScript Map.groupBy()
* The Map.groupBy() method groups elements of an object according to string values returned from a callback function.

* The Map.groupBy() method does not change the original object.
```javascript
// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Map.groupBy(fruits, myCallback);
console.log(result);
```

* **Output**
```
 Map(2) {
  'ok' => [
    { name: 'apples', quantity: 300 },
    { name: 'bananas', quantity: 500 }
  ],
  'low' => [
    { name: 'oranges', quantity: 200 },
    { name: 'kiwi', quantity: 150 }
  ]
}
```
### Find a value in Map() || JavaScript Map has()
The has() method returns true if a key exists in a map.
```javascript
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);


// Group by Quantity
const result = fruits.has("apples");
console.log(result);
```
* **Output**
```javascript
// 'apples' is valid in Fruits.
true
```
### JavaScript Map keys()
The keys() method returns an iterator object with the keys in a map: The keys() method does not change the original met.

```javascript
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// List all Keys
let text = "";
for (const x of fruits.keys()) {
  text += x;
}
console.log(text);
```
* **Output**
```
applesbananasoranges
```
### Find No Of Size
The size property returns the number of elements in a map.
```javascript
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits.size);
```
* **Output**
```
3
```
### JavaScript Map values()
* **The values() method returns an iterator object with the values in a map.**
* **The values() method does not change the original map.**
```javascript
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text = "";
for (const x of fruits.values()) {
  text += x;
}

console.log(text);

```
* **Output**
```javascript
// console.log(text);
500300200
```
