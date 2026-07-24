// app.js

// 1. Nova função que remove os acentos de qualquer texto
function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
let dados = []; // Variável global vazia que vai receber os dados

// Faz o fetch assim que o arquivo app.js é lido
fetch('dados.json')
    .then(resposta => resposta.json())
    .then(dadosConvertidos => {
        dados = dadosConvertidos; // Preenche a variável com os dados do JSON
        console.log("Banco de dados carregado com sucesso!");
    })
    .catch(erro => console.error("Erro ao carregar o JSON:", erro));

function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    
    // 2. Aplicamos a função no que o usuário digitou
    const campoPesquisaOriginal = document.getElementById("campo-pesquisa").value.toLowerCase().trim();
    const campoPesquisa = removerAcentos(campoPesquisaOriginal);

    section.style.display = 'block'; 

    if (!campoPesquisa) {
        section.innerHTML = "<p>Por favor, digite algo na barra de pesquisa!</p>";
        return;
    }

    section.innerHTML = ''; 

    // 3. Aplicamos a função nos títulos do nosso banco de dados
    const cidadeEncontrada = dados.find(dado => {
        const tituloNormalizado = removerAcentos(dado.titulo ? dado.titulo.toLowerCase() : "");
        const localidadeNormalizada = removerAcentos(dado.localidade ? dado.localidade.toLowerCase() : "");
        
        const tituloMatches = tituloNormalizado.includes(campoPesquisa);
        const localidadeMatches = localidadeNormalizada.includes(campoPesquisa);
        
        return tituloMatches || localidadeMatches;
    });

    // ... (o restante do código daqui para baixo continua igualzinho estava antes)
    if (cidadeEncontrada) {
        let resultadosHTML = '';

        // Exibe as informações gerais da cidade
        resultadosHTML += `
            <div class="item-resultado">
                <h2>${cidadeEncontrada.titulo}</h2>
                <p>${cidadeEncontrada.descricao || ''}</p>
                ${cidadeEncontrada.link ? `<p><a href="${cidadeEncontrada.link}" target="_blank">Para mais informações clique aqui</a></p>` : ''}
            </div>
        `;

        // Se a cidade encontrada tiver pontos de coleta, exiba-os em uma tabela
        if (cidadeEncontrada.pontosDeColeta && cidadeEncontrada.pontosDeColeta.length > 0) {
            resultadosHTML += `
                <div class="pontos-coleta-section">
                    <h3>Pontos de Descarte e Coleta em ${cidadeEncontrada.titulo}:</h3>
                    <table class="tabela-pontos-coleta">
                        <thead>
                            <tr>
                                <th>Tipo de Resíduo</th>
                                <th>Nome/Serviço</th>
                                <th>Endereço / Contato</th>
                                <th>Observações</th>
                            </tr>
                        </thead>
                        <tbody>
            `;

            cidadeEncontrada.pontosDeColeta.forEach(ponto => {
                resultadosHTML += `
                            <tr>
                                <td>${ponto.tipoDeResiduo || ''}</td>
                                <td>${ponto.nomeServico || ''}</td>
                                <td>${ponto.contato?.includes("http")? `<a href="${ponto.contato}" target="_blank">Acessar</a>`: ponto.contato || ''}</td>
                                <td>${ponto.observacoes || ''}
                                    ${ponto.fonte && ponto.fonte.toLowerCase() !== 'fonte' ? ` (<a href="${ponto.fonte}" target="_blank">Fonte</a>)` : ''}
                                </td>
                            </tr>
                `;
            });

            resultadosHTML += `
                        </tbody>
                    </table>
                </div>
            `;
        }

        section.innerHTML = resultadosHTML;
    } else {
        section.innerHTML = "<p class='mensagem-erro'>Nenhum resultado encontrado. Verifique a ortografia ou tente outra cidade.</p>";
        // Se não encontrar resultados, também queremos que a seção esteja visível para mostrar a mensagem.
    }
}
