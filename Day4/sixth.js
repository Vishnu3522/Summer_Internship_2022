function evaluate(marks, examType) {
  if (marks >= 90) {
    grade = "A+";
    if (examType === "final" && grade === "A+") {
      return true;
    } else {
      return false;
    }
  }
}

console.log(evaluate(92, "mtt"));
console.log(evaluate(95, "final"));
