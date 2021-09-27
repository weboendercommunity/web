const storeToGsheets = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwLqnWhyue9c-V_gIuwRDDDXL73yICXw49XpfassWe1rOCbrJWR1Mv_BXX9oA7WPYdQ/exec";
  const form = document.forms["google-sheet"];
  const btnKirim = document.querySelector(".btn-kirim");
  const btnLoading = document.querySelector(".btn-loading");

  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(() => {
    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    sweetAlert();
  });
};

const sweetAlert = () => {
  Swal.fire({
    title: '<strong>Thank You for Register!</strong>',
    icon: 'success',
    html:
      'Klik Tombol Oke Untuk Bergabung di Grup WhatsApp'
    ,showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Oke',
    confirmButtonAriaLabel: 'Thumbs up, great!',
  }).then(function(){
    window.location.href = "https://chat.whatsapp.com/J8AHL1xc1lj2dpN2s4b7WT";
  })
  }

// script validation

(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
        if (form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          storeToGsheets();
          
        }
      },
      false
    );
  });
})();