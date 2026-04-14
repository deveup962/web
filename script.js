 async function autoFillCountry() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            
            const countryCode = data.country_code;
            if (!countryCode) return;

            const countryIds = ['country', 'country1', 'country2', 'country3'];

            countryIds.forEach(id => {
                const select = document.getElementById(id);
                if (select) select.value = countryCode;
            });

        } catch (error) {
            console.log("IP autofill failed:", error);
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        autoFillCountry();

        // Për modal
        const signupModal = document.getElementById('signupModal');
        if (signupModal) {
            signupModal.addEventListener('shown.bs.modal', autoFillCountry);
        }
    });


    const depositInput = document.getElementById('deposit');
    const daysSlider = document.getElementById('daysSlider');
    const daysText = document.getElementById('daysText');
    const finalBalance = document.getElementById('finalBalance');

  
    const targets = {
        10: 408, 20: 664, 30: 1081, 40: 1760,
        50: 2867, 60: 4670, 70: 7607, 80: 12391,
        90: 20183, 100: 32876
    };

    function calculate() {
        let deposit = parseFloat(depositInput.value) || 250;
        let days = parseInt(daysSlider.value) || 1;

        let result;

       
        if (targets[days]) {
            result = targets[days];
        } else {
            
            const dailyRate = 0.050027;
            result = deposit * Math.pow(1 + dailyRate, days);
            result = Math.round(result);
        }

        
        if (result < deposit) result = deposit;

        finalBalance.textContent = result.toLocaleString('en-GB') + " £";
        daysText.textContent = days + (days === 1 ? " day" : " days");
    }

   
    depositInput.addEventListener('input', calculate);
    daysSlider.addEventListener('input', calculate);

   
    calculate();


function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon');
  
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    icon.textContent = "▲";
    icon.style.color = "#E85B77";
  } else {
    answer.style.display = "none";
    icon.textContent = "▼";
    icon.style.color = "";
  }
}



 function switchToSignup() {
    const signinModal = bootstrap.Modal.getInstance(document.getElementById('signinModal'));
    signinModal.hide();
    
    setTimeout(() => {
      new bootstrap.Modal(document.getElementById('signupModal')).show();
    }, 500);
  }


  function showForgotPassword() {
    const signinModal = bootstrap.Modal.getInstance(document.getElementById('signinModal'));
    if (signinModal) signinModal.hide();
    
    setTimeout(() => {
      new bootstrap.Modal(document.getElementById('forgotPasswordModal')).show();
    }, 400);
  }


  function backToSignIn() {
    const forgotModal = bootstrap.Modal.getInstance(document.getElementById('forgotPasswordModal'));
    if (forgotModal) forgotModal.hide();
    
    setTimeout(() => {
      new bootstrap.Modal(document.getElementById('signinModal')).show();
    }, 400);
  }


 