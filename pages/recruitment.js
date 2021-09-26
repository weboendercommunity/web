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
    location.reload(true);
  });
};

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
