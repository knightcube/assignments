let count = 0;

function counter(){
    setInterval(()=>{
        count++;
        console.log(count);
    }, 1000);
}

counter();

