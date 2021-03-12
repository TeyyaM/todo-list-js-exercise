const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function () {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE

const task1 = newTask("Clean Boo's Poos", "Bag up and responsibly dispose of the doggo's 💩");
const task2 = newTask("Do Laundry", "Uuuuuuuuuugh");
const tasks = [task1, task2];

task1.logState(); // Clean Boo's Poos has not been completed
task1.markCompleted();
task1.logState(); // Clean Boo's Poos has been completed

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }
