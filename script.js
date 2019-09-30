//spread operator
const arr = [1, 4, 7, 3]

let res = Math.max(...arr)
console.log(res)


//destructuring
const person = {
    lastName: 'Panarin',
    firstName: 'Artemiy'
}

const {lastName, firstName} = person

console.log (lastName, firstName)