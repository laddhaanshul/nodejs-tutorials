process.stdout.write("Hello \n \n");

const questions = ["What is your name?", "What you doing?"];

const answers = [];

function ask(i = 0) {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(" > ");
}

ask();

process.stdin.on("data", function (data) {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", function () {
  process.stdout.write("\n\n\n");
  process.stdout.write(">>>Holla");
});
