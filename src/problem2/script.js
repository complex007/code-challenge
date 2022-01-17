document.getElementById('token-form').addEventListener('submit', onSubmit);
document.getElementById('token-form').addEventListener('reset', reset);

function onSubmit(e) {
  e.preventDefault();
  document.getElementById('loader-overlay').style.display = "flex";
  
  setTimeout(() => {
    document.getElementById('loader-overlay').style.display = "none";
    document.getElementById('submit-btn').style.display = "none";
    document.getElementById("submit-result").textContent = 'SENT SUCCESSFULLY';
    document.getElementById("submit-result").style.color = 'green';
    document.getElementById("submit-result").disabled = true;

    document.getElementById("input-address").disabled = true;
    document.getElementById("input-otp").disabled = true;
    document.getElementById("input-amount").disabled = true;

    document.getElementById("reset-btn").style.display = "block";

  }, 2000)
}

function reset() {
  document.getElementById("input-address").disabled = false;
  document.getElementById("input-otp").disabled = false;
  document.getElementById("input-amount").disabled = false;
  document.getElementById("submit-result").textContent = '';
  document.getElementById('submit-btn').style.display = "block";
  document.getElementById('submit-btn').disabled = true;

  document.getElementById('reset-btn').style.display = "none";
}

function validateInputs(inputName) {
  const address = document.getElementById("input-address").value;
  const otp = document.getElementById("input-otp").value;
  const amount = document.getElementById("input-amount").value;
  const isAddressValid = address && !address.includes(' ');
  const isAmountValid = amount && !amount.includes(' ');
  const isOtpValid = otp && !isNaN(otp) && !otp.includes(' ');

  switch(inputName)  {
    case 'address':
      if(isAddressValid) {
        document.getElementById("address-error").textContent = '';
      } else {
        document.getElementById("address-error").textContent = 'Please fill in valid address.';
      }
      break;
    case 'amount':
      if(isAmountValid) {
        document.getElementById("amount-error").textContent = '';
      } else {
        document.getElementById("amount-error").textContent = 'Please fill in valid amount.';
      }
      break;
    case 'otp':
      if(isOtpValid) {
        document.getElementById("otp-error").textContent = '';
      } else {
        document.getElementById("otp-error").textContent = 'Please fill in valid OTP.';
      }
      break;
    default:
      break;
  }

  if(isAddressValid && isAmountValid && isOtpValid) {
    document.getElementById("submit-btn").disabled = false;
  } else {
    document.getElementById("submit-btn").disabled = true;
  }
}