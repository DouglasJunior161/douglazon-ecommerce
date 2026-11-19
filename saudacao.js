
function mostrarSaudacao() {
    const agora = new Date();
    const hora = agora.getHours();

    const diasDaSemana = [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
    ];

    const dia = diasDaSemana[agora.getDay()];

    let saudacao;

    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia!";
    }
    else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde!";
    }
    else {
        saudacao = "Boa noite!";
    }

    alert(
        "Douglas Garcia Saraiva Junior\n" +
        "São Paulo / ADS - Mackenzie\n" +
        saudacao + " Hoje é " + dia
    );
}

window.addEventListener("load", mostrarSaudacao);
