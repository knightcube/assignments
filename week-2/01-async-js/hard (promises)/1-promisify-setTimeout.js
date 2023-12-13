/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let myPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, n*1000);
  });

  return myPromise;
}

module.exports = wait;
