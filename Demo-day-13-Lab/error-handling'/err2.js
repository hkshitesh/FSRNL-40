function asyncOp(){
    return new Promise((resolve,reject)=>{
        const rand = Math.random();
        console.log(rand);
        if(rand<0.5){
            reject(new Error('Promise Error'));
        }
        else{
            resolve('Promise Operation Completed Successfully')
        }
    });
}

asyncOp().then((result)=>{
    console.log('Promise Output',result);
}).catch((err)=>{
    console.error('Promise Error',err.message)
});