// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(2))

// const event = {
//     name: 'Birthday Party',
//     printGuestList: function() {
//         console.log('Guest list for ' + this.name)   //function as object properties using 'this' we can access original object
//     }
// }

//arrow function dont bind 'this' keyword with original object
//Arrow function avoid thier own 'this' binding 
// const event = {
//     name: 'Birthday Party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name)   
//     }
// }

//Arrow fuction dont bind thier own 'this' value
//They access 'this' value in the context in which they are created 
const event = {
    name: 'Birthday Party',
    yum: 'yum',
    guestList: ['Talha', 'Jen', 'Urooj'],
    printGuestList() {
        console.log('Guest list for ' + this.name)   //function as object properties using 'this' we can access original object
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })

    }
}

event.printGuestList()