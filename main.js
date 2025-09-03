// console.log("Program executed");
// let name = "John Doe",marks=101;
// console.log("Name:", name);
// console.log("Marks:", marks);

// let a=10;
// console.log("A:", a);
// console.log("String A:", String(a));
// console.log("Boolean A:", Boolean(a));

// console.log("5"+5);

// let students={name:"bharat",marks:101}
// for(let i in students){
//     console.log(i+":"+students[i]);
// }

// function display(name,number)
// {
//     console.log(`Name: ${name}`);
//     console.log(`Number: ${number}`);
// }
// console.log(display("Bharat",101));

// const greet=function(name)
// {
//     console.log(`Hello, ${name}!`);
// }
// console.log(greet("abhi"));

// function parent(){
//     let count=0;
//     return function child(){
//         count++;
//         console.log(`Count: ${count}`);
//     }
// }

// const childFunc = parent();
// childFunc();
// childFunc();
// childFunc();


// //high order function
// const lg = function(n,action)
// {
//     for(let i=0;i<n;i++){
//          action(n);
//     }
   
// }

// lg(5,console.log);

//arrow shortest --> callback

// const square = (n) => n * n;
// console.log(square(5));

// const CallMeBack = function(code,callback){
//     console.log(`${code} got executed`);
//     callback();
// }
// CallMeBack("welcome", () => console.log("Callback executed"));

// const students = {data:{name:"John", age:21, course:"Computer Science"}};
// if(false){
//     students['status'] = () => {
//         console.log("Menthod inside the object (True)");
//     }
// }else{
//     students['status'] = () => {
//         console.log("Menthod inside the object (False)");
//     }

// }


//console.log(students);
//students.status();  // call the object

// let score=[10,20,30,40,50]
// score.forEach((value) => {
//     console.log(value*2);
// });

// let double = [1,2,3,4,5].map(num=>num*2);
// console.log(double);

// let filteredValues= [1,2,3,4,5].filter(num => num%2==0);
// console.log(filteredValues);

// let vlues=[2,1,5,4,7,5]
// vlues.sort();

// const profile={name:"John", age:30, city:"New York"};
// const activity={type:"Running", duration:"30 minutes"};

// const user={...profile, ...activity,role:"admin"};
// console.log(user);


// //-----------------------------callback--------------------------------------------------
// setTimeout(() => {
//     console.log("This message is delayed by 2 seconds");
// }, 2000);
// setTimeout(() => {
//     console.log("This message is delayed by 4 seconds");
// }, 4000);
// setTimeout(() => {
//     console.log("This message is delayed by 6 seconds");
// }, 6000);
// const fetchData = (callback) => {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         const data = { id: 1, name: "John Doe" };
//         callback(data);
//     }, 7000);
// };

// fetchData((data) => {
//     console.log("Data received:", data);
// });
// setTimeout(() => {
//     console.log("This message is delayed by 8 seconds");
// }, 8000);




// //--------------------------------------promise--------------------------------------

// const fetchDataPromise = () => {
//     console.log("Fetching data...");
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const error = false; // Simulate an error
//             if (error) {
//                 reject("Error fetching data");
//             } else {
//                 const data = { id: 101, name: "John Doe" };
//                 resolve(data);
//             }
//         }, 7000);
//     });
// };

// fetchDataPromise()
//     .then((data) => {
//         console.log("Data received:", data);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });


// //----------fetchDataPromise----
// const FetchData =  new Promise((fulfilled,reject) => {
//     console.log("Processing...");
//     const data  = fetch("https://jsonplaceholder.typicode.com/users");
//     data.then(response => response.json())
//         .then(users => {
//             console.log("Users fetched:", users);
//             fulfilled(users);
//         })
//         .catch(error => {
//             console.error("Error fetching users:", error);
//             reject("Error fetching data");
//         });
//     })
//   .then((response) => {
//       const ExtractAndUpdate = new Promise((fulfilled,reject) => {
//           console.log("Extracting and updating data...");
//           const UserDataOne = response[0];
//           if(UserDataOne.id==1){
//             UserDataOne['name'] = "raju";
//             fulfilled({ UserDataOne});
//           }
//           else{
//               reject("User not found");
//           }
//       })
//       .then((result) => {
//           console.log("Data extracted and updated:", result);
//       })
//       .catch((error) => {
//           console.error("Error:", error);
//       });
// });


//---------------async-await--------------------------------

console.log("Start fetching data...");

const fetchDataAsync = async () => {
    
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()
        console.log("Users fetched:", users)
}

fetchDataAsync();


console.log("Fetching data complete.");
