// USING innerHTML
function checkTheAge() {
     let personAge = document.getElementById('personAge').value;
     if (Number(personAge) >= 18) {
          document.getElementById('ageStatus').innerHTML="Status: You're eligible to vote.";
     }
     else {
          document.getElementById('ageStatus').innerHTML="Status: You're still a minor.";
     }
}
