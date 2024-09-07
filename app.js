  function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    if (!campoPesquisa) {
      section.innerHTML = "Digite algo na barra de pesquisa";
      return;
    }
  
    let resultados = "";
  
    for (let dado of dados) {
      if (dado.titulo.toLowerCase().includes(campoPesquisa)) {
        resultados += `
          <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Para mais informações clique aqui</a>
          </div>
        `;
      }
    
      if (!resultados){
        resultados = "Nenhum resultado encontrado"
      }

    }
  
    section.innerHTML = resultados;
  }