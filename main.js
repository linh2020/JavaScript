// let User = function(firstName, lastName, email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
// }

// console.log(User);

// let u1 = new User('Linh', 'Huynh', 'linh@gmail.com');
// console.log(typeof u1);
// console.log(u1);
// console.log(u1.firstName);
// u1.staff = 'Prof';
// console.log(u1);

// let u2 = new User('David', 'Huynh', 'linh')
// u2.pos = 1;
// console.log(u2);

// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 5000);
// console.log("3");

// // Viết code tại đây
// function isNumber(value) {
//     var check = typeof value;
//     if (check === 'number' && !isNaN(value))
//         return true;
//     else
//         return false;
// }


let courses = [{
        id: 1,
        name: 'JavaScript',
        coin: 2
    },
    {
        id: 2,
        name: 'PHP',
        coin: 10
    },
    {
        id: 3,
        name: 'PHP',
        coin: 20
    },
    {
        id: 4,
        name: 'C++',
        coin: 300
    }
]

// console.log(courses);

// courses.forEach(function(course) {
//     console.table(course);
// });

// function takeOrder(success, failure) {
//     setTimeout(() => {
//         const random = (Math.random() * 10);
//         if (random < 8) {
//             const order = random < 4 ? 'Coffee' : 'Tea';
//             success(order);
//         } else {
//             failure('Order Not Available');
//         }

//     }, 500);
// }
// takeOrder(
//     (order) => {
//         console.log('Order is for: ' + order);
//     },
//     (error) => {
//         console.log(error);
//     }
// );


// // 1 Callback function with 2 parameters
// function numberHandler(number, notification) {
//     if (number % 2 === 0) {
//         notification(number, " is even");
//     } else {
//         // const result = " is odd";
//         // notification(number, result)
//         // we can assign directly to function as a parameter
//         notification(number, " is odd")
//     }
// }

// numberHandler(5, (number, info) => {
//     console.log(number + info)
// })

// numberHandler(6, (number, info) => {
//     console.log(number + info)
// })


// // 2 Callback function with 2 parameters for each
// function orderCoffee(success, failure) {
//     orderStatus = Math.random() * 10;
//     if (orderStatus < 7) {
//         const typeofDrink = orderStatus < 5 ? "Coffee" : "Tea";
//         success(orderStatus, typeofDrink + " is being processed");
//     } else {
//         // const status = "Store is closed today";
//         // failure(status);
//         // The String in failure function is as a parameter
//         failure(orderStatus, "Store is closed today");
//     }
// }

// orderCoffee(
//     (orderNumber, order) => {
//         console.log(orderNumber, order)
//     },
//     (error, status) => {
//         console.log(error, status)
//     }
// )


let arr = ['JavaScript', 'PHP', 'Java', 'C++'];
arr.forEach((each, i) => {
    console.log(`${i} => ${each}`);
})


Array.prototype.myForEach = (callback) => {

}


// test 1213
// test 1217
// test 1217-1
// test 1228
// test 1
// test 2
// test3
// test 4