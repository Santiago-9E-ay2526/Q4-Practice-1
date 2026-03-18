// USING innerHTML
function checkTheAge() {
     let personAge = document.getElementById("age").value;
     if (Number(age) >=18) {
          document.getElementById("ageStatus").innerHTML="Status: You're eligible to vote.";
     }
     else {
          document.getElementById("ageStatus").innerHTML="Status: You're still a minor.";
     }
}