/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  let myPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, t * 1000);
  });

  return myPromise;
}

function wait2(t) {
  let myPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, t * 1000);
  });

  return myPromise;
}

function wait3(t) {
  let myPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, t * 1000);
  });

  return myPromise;
}

function calculateTime(t1, t2, t3) {
  const startTime = new Date();

  let ansPromise = new Promise((res, rej) => {
        const allPromises = [wait1(t1),wait2(t2),wait3(t3)];
        
        Promise.all(allPromises).then(()=>{
            const endTime = new Date();
            res(endTime-startTime);
        })
  });

  return ansPromise;
}

module.exports = calculateTime;
