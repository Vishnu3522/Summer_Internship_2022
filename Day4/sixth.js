const checkGrade = (marks, examType) =>{
    if((examType === "final" && marks >=90) || (marks >= 89 && examType != "final" ))
        return true;
    else return false;

};

console.log(checkGrade(92, "mid"));
console.log(checkGrade(85,"final"));
