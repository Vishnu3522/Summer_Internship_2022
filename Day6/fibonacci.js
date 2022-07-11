function fibonacci(num) {
    var x = 0;
    var y = 1;
    var z;
    var i = 0;
    for (i = 2; i < num; i++) {
      z = x + y;
      x = y;
      y = z;
    }
    return y;
  }
  
  var num = 7;
  answer = fibonacci(num);
  
  console.log("The 7th term of the Fibonacci series is: ", answer);