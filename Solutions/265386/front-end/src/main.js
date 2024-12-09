function prepare(ingredients, callback) {
  console.log(`preparing stuffs: ${ingredients.join(", ")}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback("preparing"));
    }, 500);
  });
}

function cooking(callback) {
  console.log("making an omelette ...");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback("making"));
    }, 2000);
  });
}

function serve(callback) {
  console.log("serving food ...");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback("serving"));
    });
  });
}

function eat(callback) {
  console.log("eating ...");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback("eating"));
    }, 1000);
  });
}

function doneMessage(prevStep) {
  console.log(`${prevStep} done, next step ...`);
}

function startCooking(stuffs) {
  const ingredients = stuffs;
  const callback = doneMessage;

  prepare(ingredients, doneMessage)
    .then(() => cooking(callback))
    .then(() => serve(callback))
    .then(() => eat(callback))
    .then(() => console.log("process is done"));
}

startCooking(["eggs", "tomatoes"]);

module.exports = { prepare, cooking, serve, eat, doneMessage };
