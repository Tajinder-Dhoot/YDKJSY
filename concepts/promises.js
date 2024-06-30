function firstPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Successful promise!');
      }, 2000);
    });
  }
  
  function secondPromise() {
    return new Promise((resolve) => {
      resolve('Second successful promise!');
    });
  }
  
  async function someAsyncAwaitFunction() {
    try {
      let now = new Date();
      console.log("time before calling 1st promise: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds());

      const promise = await firstPromise();
      now = new Date();
      console.log("time after calling 1st promise: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds());

      const promiseTwo = await secondPromise();
      now = new Date();
      console.log("time after calling 2nd promise: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds());
  
      console.log(promise);
      now = new Date();
      console.log("time after logging 1st promise: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds());

      console.log(promiseTwo);
      now = new Date();
      console.log("time after logging 2nd promise: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds());

    } catch (error) {
      console.log(`Error from async function: ${error}`);
    }
  }
  
  someAsyncAwaitFunction();