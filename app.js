// app.js

function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase().trim();

    // Adiciona esta linha para garantir que a seção esteja visível ao iniciar uma pesquisa
    section.style.display = 'block'; // Torna a seção visível

    if (!campoPesquisa) {
        section.innerHTML = "<p>Por favor, digite algo na barra de pesquisa!</p>";
        // Se a pesquisa estiver vazia, pode ser útil ocultar a seção novamente ou deixá-la visível com a mensagem.
        // Para este caso, vamos deixá-la visível com a mensagem.
        return;
    }

    section.innerHTML = ''; // Limpa resultados anteriores

    const cidadeEncontrada = dados.find(dado => {
        const tituloMatches = dado.titulo && dado.titulo.toLowerCase().includes(campoPesquisa);
        const localidadeMatches = dado.localidade && dado.localidade.toLowerCase().includes(campoPesquisa);
        return tituloMatches || localidadeMatches;
    });

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
        section.innerHTML = "<p>Nenhum resultado encontrado para a sua busca.</p>";
        // Se não encontrar resultados, também queremos que a seção esteja visível para mostrar a mensagem.
    }
}
