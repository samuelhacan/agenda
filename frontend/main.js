import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Cadastro from './modules/Contato';

//import './assets/css/style.css';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

login.init();
cadastro.init();

const verificaInputContato = new Cadastro('input[name="nome"]', 'input[name="telefone"]');
verificaInputContato.init();