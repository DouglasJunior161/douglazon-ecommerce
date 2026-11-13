
var nome = "Douglas Junior";
var ano = 2026;
var twitter = "@djr";
var facebook = "Douglas Junior";
var instagram = "@douglasjunior";
var linkedin = "https://www.linkedin.com/in/douglas-junior-0b2a87233/";
var github = "https://github.com/DouglasJunior161";
var sexo = "Masculino";
var localizacao = "Guarulhos - SP";

const footerHTML = `
    <p class="footer">
        <b>&copy; 2026 Douglazon.<br>
        Todos os direitos reservados.</b>
    </p>

    <div class="java-footer">
        <b>Nome:</b> ${nome}<br>
        <b>Ano:</b> ${ano}<br>
        <b>Twitter:</b> ${twitter}<br>
        <b>Facebook:</b> ${facebook}<br>
        <b>Instagram:</b> ${instagram}<br>
        <b>LinkedIn:</b> <a href="${linkedin}" target="_blank" rel="noopener noreferrer">Acessar perfil</a><br>
        <b>GitHub:</b> <a href="${github}" target="_blank" rel="noopener noreferrer">Acessar perfil</a><br>
        <b>Sexo:</b> ${sexo}<br>
        <b>Localização:</b> ${localizacao}<br>
    </div>
`;

document.getElementById("footer-container").innerHTML = footerHTML;
