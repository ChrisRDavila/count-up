//function loopdaloop(number){
//  for(let i=0; i < number; i++) {
//    console.log(i);
//  }
//}

function loopdaloop(countTo, countBy) {
  if (countTo === NaN || countBy === NaN) {
    console.log("Please enter a number");
  } else if (countTo <= 0 || countBy <= 0) {
    console.log("Make yourself a positive");
  } else {
    for(let i=1; i <= countNumber; i++) {
      console.log(i*countBy);
    }
  }
  }
  
  function loopdaloop(countTo, countBy) {
    answer = [];
    if (countTo === NAN || countBy === NaN) {
      return ("Use a positve number");
    } else if (countTo < 0 || countBy < 0) {
      return ("Please enter a positive number");
    } else if (countBy > countTo) {
      return ("number your counting by is greater then number counting to");
    } else {
      for(let i = 0; i <= countTo; i++){
        if (i % countBy === 0) {
        answer.push(i);
        }
      }
      return answer;
    }
  }
  
//replace console with answersArray = [] in project