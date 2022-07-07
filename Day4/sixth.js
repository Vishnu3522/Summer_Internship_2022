function checkGrade(marks, examType) {
  if (marks >= 90) {
    grade = "A+";
    if (examType === "final" && grade === "A+") {
      return true;
    } else {
      return false;
    }
  }
}

console.log(checkGrade(92, "mtt"));
console.log(checkGrade(95, "final"));
