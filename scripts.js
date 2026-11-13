
var nome = "Douglas Junior";
var ano = 2026;
var twitter = "@djr";
var facebook = "Douglas Junior";
var intagram = "@douglasjunior";
var linkedin = "https://www.linkedin.com/in/douglas-junior-0b2a87233/";
var github = "https://github.com/DouglasJunior161";
var Sexo = "Masculino";
var localizacao = "Guarulhos - SP";

document.getElementById("dados-footer").innerHTML = `
    <b>Nome:</b> ${nome}<br>
    <b>Ano:</b> ${ano}<br>
    <b>Twitter:</b> ${twitter}<br>
    <b>Facebook:</b> ${facebook}<br>
    <b>Instagram:</b> ${intagram}<br>
    <b>LinkedIn:</b> <a href="${linkedin}" target="_blank" rel="noopener noreferrer">Acessar perfil</a><br>
    <b>Github:</b> <a href="${github}" target="_blank" rel="noopener noreferrer">Acessar perfil</a><br>
    <b>Sexo:</b> ${Sexo}<br>
    <b>Localização:</b> ${localizacao}<br>
`;
