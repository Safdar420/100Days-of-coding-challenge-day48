//  Q no 142

const helloPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 2000);
  });
  
  helloPromise.then((message) => console.log(message));
  
//    Q no 143

const conditionalPromise = new Promise<string>((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Success!");
    } else {
      reject(new Error("Failure"));
    }
  });
  
  conditionalPromise
    .then((result) => console.log(result)) 
    .catch((error) => console.log(error.message)); 

    // Q 144

    const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Outputs: [3, 42, "foo"]
});