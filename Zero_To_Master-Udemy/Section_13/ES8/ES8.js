// Total spaces including string
.padStart()
.padEnd()

// trailing commas, parameters, and function lists
const fun = (a,b,c,d,) => {
    console.log(a);
}

// Object.values & Object.entries // Object.keys
let obj = {
    username0: "Santa",
    username1: "Rudolph",
    username2: "Mr.Grinch"
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

// username0 Santa // username1 Rudolph // username2 Mr.Grinch

Object.values(obj).forEach(value => {
    console.log(value);
})

// Santa // Rudolph // Mr.Grinch

Object.entries(obj).forEach(value => {
    console.log(value);
})

// ["username0", "Santa"] // ["username1", "Rudolph"] // ["username2", "Mr.Grinch"]

Object.entries(obj).map(value => {
    return value[1] + value[0].replace("username", "");
})

// ["Santa0", "Rudolph1", "Mr.Grinch2"]

let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

Object.entries(obj).map(value => value.join(" ")).join(' ')

// 'my name is Rudolf the raindeer'