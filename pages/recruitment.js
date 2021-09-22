
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwLqnWhyue9c-V_gIuwRDDDXL73yICXw49XpfassWe1rOCbrJWR1Mv_BXX9oA7WPYdQ/exec'
        const form = document.forms['google-sheet']
        
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => $("#form_alerts").html("<div class='alert alert-success'>Contact message sent successfully.</div>"))
            .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Contact message not sent.</div>"))
        })