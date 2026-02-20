/* Query selectors */

// const para=document.querySelector('p');
// para.textContent='This is a simple sample page.';

// const para=document.getElementById('para');
// para.textContent='this is para1';
// console.log(para);

// const para=document.getElementsByClassName('para')
// para[0].textContent='this is para1'
// para[1].style.color='pink'
// para[1].textContent='this is para2'
// para[2].style.color='blue'
// console.log(para);

// const para=document.querySelector('.para')
// para.style.color='green'
// para.textContent='this is para1'
// console.log(para);

// const para=document.querySelectorAll('.para')
// para[0].innerText='this is para1'
// para[0].textContent='this is para1'
// para[1].style.color='blue'
// para[1].innerHTML

/* Event listeners */

// const button=document.querySelector('#btn')
// // button.classList.add('btn')
// // // button.classList.remove('btn')
// // button.classList.toggle('btn')
// function message(){
//  alert('you have clicked the button')}
//  button.addEventListener('click',message)

//  const button2=document.querySelector('#bt')
//  button2.addEventListener('click',function(){
//     button.removeEventListener('click',message)
//  })

// const btn=document.querySelector('#btn')
// btn.addEventListener('keyup',function(event){
//     console.log(event.key)})

// const btn=document.querySelector('button')
// const div=document.querySelector('.container')
// const div2=document.querySelector('.div2')
// btn.addEventListener("click",function(){console.log("button")},true)
// div.addEventListener("click",function(){console.log("Div")},true)
// div2.addEventListener("click",function(){console.log("Div2")},true)

// debugger
// console.log(a)
// // console.log(b)

// var a=78
// let b=345

// console.log(a)
// console.log(b)

// function print(){
//     let c=45
//     console.log(c)
//     console.log("Inside fn")
// }

// print()

// let total=100

// function calc(){
//     console.log(total)
//     let total=100
// }
// calc()

/* Set Timeout */

// console.log("first line");
// setTimeout(()=>{
//     console.log("after 2 sec")
// },2000);
// console.log("second line")

// setTimeout(()=>{
//     alert("alert after 3 sec!!")
// },3*1000);

// setInterval(()=>{
//     console.log("hello world!")
// },2000);

// const timerId=setInterval(()=>{
//     console.log("hello world!!")
// },1000);

// //console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000);

// let count=1;

// const id= setInterval(()=>{
//     if(count===10)clearInterval(id)
//     console.log(count)
//     count++;
// },1000);

// function print(name){//higher order function
//     console.log("Hello students!", name)
// }

// function greet(num){ //higher order fn
//     console.log("Welcome to my class!!")
//     setTimeout(() => {
//         console.log("Inside SetTimout")
//         let firstName="Alex"
//         num(firstName)
//     }, 2000)
// }
// greet(print)

// console.log("Starting Homework...");

// setTimeout(() => {
//     console.log("Homework Done!");
//     console.log("Starting Dinner...");

//     setTimeout(() => {
//         console.log("Dinner done!");
//         console.log("Getting ready to go out..");

//         setTimeout(() => {
//             console.log("Going to the playground!");
//         }, 1000); //after dinner
//     }, 1500); //dinner time
// }, 2000); //homework time

// function finishHomework(callback) {
//     console.log("Starting homework...");
//     setTimeout(() => {
//         console.log("Homework done!");
//         callback();
//     }, 2000)
// }

// function eatDinner(callback) {
//     console.log("Starting Dinner...");
//     setTimeout(() => {
//         console.log("Dinner done!");
//         callback();
//     }, 1500)
// }

// function goToPlayground() {
//     console.log("Going to the playground!");
// }

// finishHomework(() => {
//     eatDinner(() => {
//         goToPlayground();
//     });
// });

// const p=new Promise(function(resolve,reject){
//     // resolve()
//     // reject()
//     setTimeout(()=>{
//         let done=true;
//         if(done){
//             resolve()
//         }else{
//             reject()
//         }
//     },3000)
// })
// p.then((data)=>{
//     console.log("Resolved",data)
// }).catch((err)=>{
//     console.log("Rejected",err)
// }).finally(()=>{
//     console.log("Finally black")
// })

// console.log(p)

// function doHomework(){
//     return new Promise(function(resolve,rejected){
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Homework is done")
//                 resolve("Homework completed")
//             }else{
//                 rejected("Homework is not done")
//             }
//         },3000)
//     })
//     return p
// }

// function eatDinner(){
//     return new Promise(function(resolve,rejected){
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Dinner is done")
//                 resolve("Dinner completed")
//             }else{
//                 rejected("Dinner is not done")
//             }
//         },3000)
//     })
//     return p
// }

// function goToPlayground(){
//     return new Promise(function(resolve,rejected){
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Play is done")
//                 resolve("play completed")
//             }else{
//                 rejected("Play is not done")
//             }
//         },3000)
//     })
//     return p
// }

// doHomework().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("All tasks are done")
// })

/* 09/02/26 -  */

// console.log("First Line")
// setTimeout(() => {
//     console.log("Inside Timeout")
// },0);
// const p=new Promise((resolve,reject)=>{
//     resolve()
// })

// p.then(()=>{
//     console.log("Inside Promise")
// }).catch(()=>{
//     console.log("Inside Catch")
// })

// const p2=new Promise((resolve,reject)=>{
//     resolve()
// })

// p2.then(()=>{
//     console.log("Inside Promise2")
// }).catch(()=>{
//     console.log("Inside Catch2")
// })
// console.log("Last Line")

// const form=document.querySelector("#form")
// const eventCards=document.querySelector(".event_cards")

// function orderFood() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Food Ordered");
//       resolve("Food Ordered");
//     }, 1000);
//   });
// }

// function prepareFood() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Food Prepeared");
//       resolve("Food Prepeared");
//     }, 1000);
//   });
// }

// function deliverFood() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Food Delivered");
//       resolve("Food Delivered");
//     }, 1000);
//   });
// }

// orderFood().then((data)=>{
//     console.log(data)
//     return prepareFood()
// }).then((data)=>{
//     console.log(data)
//     return deliverFood()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// async function order(){
//     const data=await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()
// }

// order()

// console.log("First line")
// try{
//     // console.log(sample)
//     let age=19
//     if(age<18){
//         //error
//         throw new Error("Access Denied")
//     }
// }catch(err){
//     console.log(err)
// }finally{
//     console.log("finally block")
// }

// console.log("last line")

// async function getData(){
//     try{
//         const response= await fetcg("https://dummyjson.com/products")
//         console.log(response.ok)
//         if (response.ok===false) throw new Error("data not found")
//         const data= await response.json()
//         console.log(data)
//     }catch(error){
//        console.log("data not found")
//     }
// }
// getData()

