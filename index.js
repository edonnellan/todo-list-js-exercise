const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    completeTask: function() {
      this.complete = true;
    }
  };
  return task;
};


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task2.logState(task2); // Clean Cat Litter has not been completed
task2.completeTask(task2);
task2.logState(task2); // Clean Cat Litter has been completed

// console.log(task1);
// console.log(task2);
console.log(tasks);
