function compare() {
    const email = document.getElementById('email').value;
    const cmail = document.getElementById('cemail').value;

    const emailStatus = document.getElementById('emailStatus');

    if(email == cmail){
        emailStatus.style.display = "none"
      return true;
    } else {
        emailStatus.style.display = "block"
      return false;
    }
  }

  