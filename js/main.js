$(document).ready(function() {
    $('.menuHamburger').click(function() { // Detectar quando o menu é clicado
        $('.formCadastro').slideToggle();
    }) 

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000');

    $('.formCadastro').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            },
        },
        messages: {
            nome: 'Por favor insira o seu nome',
            telefone: 'Por favor digite seu telefone',
            email: 'Por favor insira um email',
            cpf: 'Por favor digite seu CPF',
            endereco: 'Por favor insira seu endereço',
            cep: 'Por favor digite seu CEP',
        }
    })
})