export default class Cadastro {
    constructor(inputName, inputTelefone) {
        this.inputName = document.querySelector(inputName);
        this.inputTelefone = document.querySelector(inputTelefone);
    }

    init() {
        this.events();
    }

    events() {
        const form = document.querySelector('.form-contato');
        form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(form); 
        });
    }

    validate(form) {
        let error = false;

        const nameInput = this.inputName.value;
        if (nameInput.length < 3 || nameInput.length > 50) {
            alert('O nome deve ter entre 3 e 50 caracteres.');
            error = true;
        }

        const inputTelefone = this.inputTelefone.value;
        if (inputTelefone.length !== 11 || isNaN(inputTelefone)) {
            alert('Telefone Inválido');
            error = true;
        }

        if (!error) form.submit(); 
    }
}
