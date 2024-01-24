# Js
- "var" -> is ES5 -- old version
-- can be used outside of bracket
-- var add to the window object

- "let & const" -> is ES6 -- old version
-- can not be used outside of bracket
-- let doesnot add to the window object

## Window
- feature the ar part of browser not the part of javascript it provided by the browser....
- we can find the list of window object... by typing "window" in the console panal in browsers...

## Brower Context API 
- It contain 3 main things: (1) Window object (2) Stack (3) Heap Memory

## Stack
- ek ke upar ek -- LIFO
## Heap MEmory
- jitna bhi varibles kaa data hum banate haa unhee store kahi to karnaa haai... uskee liaa hum heap memory use korte hobeee...
## Execution context
- jub bhi hum funct( ) chalaenge func apna ek khudka ek imaginary container bana lega jismein teen cheeje hogi:
(1) varibles
(2) function inside a func
(3) "lexical environment" of that function -- determie hum kiaa use kar sakte haai or kiaa nahii
## lexical environment
- ek chrt jisme ye likha hotaa haai aapka particular function ki cheejo ko access kar sakta haai and kinkoo nahiii
## Spread oporator "..." - this three dot is the oporator
- yee use hotaa haai ki copy karne kee liaa...
## Truthy & Falsy
- JS MEIN kuch bhi likho wo mainly do mein see kisi ek prakar ko belong karti haai
- falsy value ye hai = 0,false,undifined,null,NaN,document.all
- truthy value-- all other than falsy

## forEach forin dowhile
- forEach - loop sirf array pe chalta haai
forEach kabhi bhi aapke array mein change nahi karta woo aapko temporary ek array mei change korata haai.... original array same raheta haai...
- forin - object par loop karne ke liaa use karta haai

## callback func
- jab bhi koi asia code jo baad me chalta haai aap likhoge.. kuki wo code badh mein chalta haai JS ko yoo pata nahi hotaa ki woo complete huaa haa ki nahi.. asi code ki completion par JS ko bataya jata haai ki wo complete hogaya aur app use chal sakta ho... yee batane ke kaam "callback" kaa haai

## first class func
- Js mein ek concept haai jiska matlab hotaa hai ki app func ko use kar sakta haa as a value..

## how array is stored in JS behind the secen
- it stored in form of object not array

## to check array
- Array.isArray() -- to check if its array or not...
- Array.isArray([])-- true
- Array.isArray({})-- false