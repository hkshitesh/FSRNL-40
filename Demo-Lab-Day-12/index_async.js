

var a=10;
var b=0;

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
     },2000)
})


waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})

