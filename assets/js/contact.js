const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function send() {
    let form = document.getElementById('form');
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El correo se ha enviado.',
        showConfirmButton: false,
        timer: 3000,
      });

      form.reset();
}