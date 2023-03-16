function calculateLCM() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    var lcm = calculateLCMHelper(num1, num2);
    
    document.getElementById("result").innerHTML = "The LCM of " + num1 + " and " + num2 + " is " + lcm;
    document.getElementById("result").style.display = "block";
  }
  
  function calculateLCMHelper(num1, num2) {
    var gcd = calculateGCD(num1, num2);
    return (num1 * num2) / gcd;
  }
  
  function calculateGCD(num1, num2) {
    while (num2 != 0) {
      var temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return num1;
  }

  // src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.2/js/bootstrap.bundle.min.js">