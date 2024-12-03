//Task 1

const favouriteSongs = ["Tiny Dancer", "Running Up That Hill", "Don't Stop Moving", "Tragedy", "Crazy Horses"];

const profitPyramidScheme = [1, 2, 4, 8, 16, 32,];

let friends = [
    {name: "Chris", skill: "changing lives"},
    {name: "Lizzie", skill: "being friendly"},
    {name: "Ben", skill: "code rapping"},
    {name: "Tao", skill: "hand raising"},
    {name: "Liz", skill: "crochet"},
    {name: "Patrick", skill: "Call of Duty"},
    {name: "Tim", skill: "analogies"},
    {name: "James", skill: "friendship"},
    {name: "Joseph", skill: "positive"},
    {name: "Max", skill: "papier-mâché"}
];

// Task 2

let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  console.log (options[2])

  console.log (options[9])

  console.log (options[4])

  // Task 3
  let englishNumbers = ["one", "two", "three", "four", "five"];

  let index = 0;

  while (index < englishNumbers.length){ //every time the loop is run, it checks if index => englishNumbers.length
    console.log (englishNumbers[index]);
    index++; // it should print 1-5 (this is the length of englishNumbers). Once the index is less than 5, the loop will stop as the condition is false and englishNumbers[5] does not exist and index < 5 becomes false.
  }