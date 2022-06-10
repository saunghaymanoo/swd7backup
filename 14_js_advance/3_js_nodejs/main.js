// setTimeout(function (){
//     console.log("I am Js.");
// },2000);
// navigator.getBattery().then(function (data){
//     console.log(data.level)
// })
let fs=require("fs");
fs.writeFile("test.html","created from nodejs",function (){
    console.log("created");
});
