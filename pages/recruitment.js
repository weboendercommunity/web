
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwLqnWhyue9c-V_gIuwRDDDXL73yICXw49XpfassWe1rOCbrJWR1Mv_BXX9oA7WPYdQ/exec'
        const form = document.forms['google-sheet']
        const btnKirim = document.querySelector('.btn-kirim');
        const btnLoading = document.querySelector('.btn-loading');
        
        form.addEventListener('submit', e => {
            e.preventDefault()

            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
           .then(()=> {btnLoading.classList.toggle('d-none');
           btnKirim.classList.toggle('d-none');
           location.reload(true)}); 
        })