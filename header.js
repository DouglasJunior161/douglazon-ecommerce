const headerHTML = `
    <nav class="barra-nav">

        <div class="nav-logo">
            <a href="Homepage - Douglazon - Aplicando Conhecimentos.html">
                <img src="imagens/douglazon_branco.png" alt="Homepage">
            </a>
        </div>

        <div class="nav-pesquisa">
            <input id="pesquisa" type="text" required name="pesquisa" placeholder="Pesquisar">
            <button type="submit">Enviar</button>
        </div>

        <div class="nav-links">
            <a class="link-inicio" href="Homepage - Douglazon - Aplicando Conhecimentos.html">Início</a>
            <a href="Produtos - Douglazon - Aplicando Conhecimentos.html">Produtos</a>
            <a href="Contato - Douglazon - Aplicando Conhecimentos.html">Contato</a>
        </div>

    </nav>
`;

document.getElementById("header-container").innerHTML = headerHTML;