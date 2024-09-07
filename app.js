function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
  const section = document.getElementById("resultados-pesquisa");
  // Obtém o valor do campo de pesquisa, convertendo-o para letras minúsculas para facilitar a comparação.
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio. Se estiver, exibe uma mensagem e encerra a função.
  if (!campoPesquisa) {
    section.innerHTML = "Digite algo na barra de pesquisa";
    return;
  }

  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = "";

  // Itera sobre cada dado na lista de dados.
  for (let dado of dados) {
    // Verifica se o título do dado contém o termo de pesquisa (ignorando maiúsculas e minúsculas).
    if (dado.titulo.toLowerCase().includes(campoPesquisa)) {
      // Se o título corresponder, cria um elemento HTML para exibir o resultado da pesquisa.
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p>${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Para mais informações clique aqui</a>
        </div>
      `;
    }

    // Se nenhum resultado foi encontrado, exibe uma mensagem informando.
    if (!resultados) {
      resultados = "Nenhum resultado encontrado";
    }
  }

  // Atualiza o conteúdo da seção de resultados com os resultados encontrados.
  section.innerHTML = resultados;
}
