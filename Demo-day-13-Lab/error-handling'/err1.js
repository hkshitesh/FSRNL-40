function asyncOp(callback) {
    const rand = Math.random();
    console.log(rand);
    if(rand<0.5)
    {
        callback(new Error("My error"), null);
    }
    else{
        callback(null,"My Code is working fine");
    }
}
asyncOp((err, result) =>{
    if(err){
        console.error('Async Error', err.message);
    }
    else{
        console.log('Function output', result)
    }
});
