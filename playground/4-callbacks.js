// setTimeout(()=>{
//     console.log('2 seconds are up')
// },2000)

const { uptime } = require("process")

// const names = ['Talha', 'Jen', ' James']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })  

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     },3000)
// }

// geocode('Pakistan', (data) => {
//     console.log(data)
// })



// 1. Define an add function that accepts the correct argument
// 2. Use a setTimeout to simulate a 2 second DelayNode
// 3. After 2 seconds are up, call the callback function with a sum
// 4. Test your work

const add = (num1,num2,callback) => {
    setTimeout(() => {
        callback(num1 + num2)
    },2000)
}

add(1,4 , (sum) => {
    console.log(sum)
})