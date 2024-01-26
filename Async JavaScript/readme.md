## Synchronous
- ek ke baad ek jab karte haai usee Synchronous kahete haai
- jub ek command complete hoo uskee baad orr ek kaam
## Asynchronous
- jaab ek sathe kaam kiaa jata haai....
- jiskaa kaam pahelaa hojaeee uskkaa value return karr do
### Eg
task 1= 2sec
task 2= 10 sec
task 3= 5sec
Synchronous will take time of 17sec where as asynchronous will take time of 10sec
 
## Asynchronous Type/Example
- setTimeout
- setInterval
- promises
- fetch
- axious
- XMLHttpRequest
## Async JS
- jub apka final code depend hotaa haai kisi aur ke server paar, is case mein hume naki pata hotaa ki answer uske server se kab laut kar aegaa.... taab hum log async code use/likhte haai... taaki blocking naa hoee... aur jaab answer aayee humara answer ke respect mein chalne waala code chal jaaee...
- iskaa basic usee hotaa haai jaab humee pataaa naai answer kitna time lagegaa...

## Event Loop
- its work is to check their is anything left in the SS/Side-Stack(its contains all the async code)---if there is anything is will send it to the Main-Stack(it contain all the sync code)

## java is single-threading not multi-threading

## callbacks => function
- yee tabhi chalega jaabh async code ke completation hogaaa

fetch
axios
promises
settimeout
setinterval
- yee sabh async ke code jee jisee async ke liaa use karte haai

- orr iss saab kaa ans hum in-sabh meein lete haai

then catch
callbacks
async await


## Concurrency
- JS mein sync code and async code ek sath process ho raha tha ye hai concurrency
## Parallelism
- focus jaada kartaa haai different processors and unke cores paar kaam ko chalaane par
## Throttling
- kisi code ko control karna number of execution