function counterWithoutSetInterval(count=1){
    setTimeout(()=>{
        console.log(count);
        counterWithoutSetInterval(count+1);
    },1000);
}

counterWithoutSetInterval();