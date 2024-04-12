document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form[action="action_page"]');
    form.addEventListener("submit", function(event) {
        var email = document.getElementById('email').value;
        var password = document.getElementById('psw').value;
        var passwordRepeat = document.getElementById('psw-repeat').value;

        // Validation de l'email (simple validation)
        if (!isValidEmail(email)) {
            alert("Veuillez entrer une adresse email valide.");
            event.preventDefault();
            return;
        }

        // Validation du mot de passe (au moins 8 caractères)
        if (password.length < 8) {
            alert("Le mot de passe doit contenir au moins 8 caractères.");
            event.preventDefault();
            return;
        }

        // Validation de la correspondance des mots de passe
        if (password !== passwordRepeat) {
            alert("Les mots de passe ne correspondent pas.");
            event.preventDefault();
            return;
        }

        // Si toutes les validations passent, le formulaire est soumis
        alert("Formulaire soumis avec succès !");
    });

    function isValidEmail(email) {
        // Cette fonction utilise une expression régulière simple pour valider l'email
        var emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }
});