import { listaProdutos } from "../assets/Dados/Data.js";
import "/src/CSS/Componente5.css";
// import "/src/Components/CSS/gestao.css";
function GestaoProdutos() {
  const verificarDisponibilidade = (quantidade) => {
    let mensagem = "";


    //LOGICA PARA VER SE A QUANTIDADE DO PRODUTO FOR IGUAL A ZERO , E PARA MOSTRAR A MENSAGEM "ITEM INDISPONIVEL NO MOMENTO", SE A QUANTIDADE FOR MENOR QUE 5 , MOSTRAR A MENSAGEM "ATENÇÃO: POUCAS UNIDADES RESTANTES", SE A QUANTIDADE FOR MAIOR OU IGUAL A 5 , MOSTRAR A MENSAGEM "PRODUTO EM ESTOQUE"
    if (quantidade === 0) {
      mensagem = "Item indisponível no momento";
    } else if (quantidade < 5) {
      mensagem = "Atenção: Poucas unidades restantes";
    } else {
      mensagem = "Produto em estoque";
    }
    if  (estoque === 0) {
      mensagem = "Produto esgotado";
    } else if (quantidade < 5) {
      mensagem = "Atenção: Poucas unidades restantes";
    } else {
      mensagem = "Produto disponível";
    }

    return mensagem;
  };
  //LOGICA PARA VER SE A CATEGORIA DO PRODUTO FOR "PERIFÉRICOS", MOSTRAR A MENSAGEM "SETOR DE HARDWARE E ENTRADA", SE A CATEGORIA FOR "VÍDEO", MOSTRAR A MENSAGEM "SETOR DE MONITORES E TELAS", SE A CATEGORIA FOR DIFERENTE DE "PERIFÉRICOS" E "VÍDEO", MOSTRAR A MENSAGEM "SETOR GERAL"

  //UMA SUBFUNÇÃO PARA FORMATAR O NOME DA CATEGORIA DO PRODUTO, RECEBENDO A CATEGORIA COMO PARÂMETRO E RETORNANDO O NOME FORMATADO DE ACORDO COM AS REGRAS DEFINIDAS

  // "=>" UMA ARROW FUNCTION PARA DEFINIR A FUNÇÃO DE FORMA MAIS CONCISA, SEM A NECESSIDADE DE USAR A PALAVRA-CHAVE "FUNCTION" E COM RETORNO IMPLÍCITO QUANDO O CORPO DA FUNÇÃO É SIMPLES
  const formatarCategoria = (cat) => {
    let textoFormatado = "";

    if (cat === "Periféricos") {
      textoFormatado = "Setor de Hardware e Entrada";
    } else if (cat === "Vídeo") {
      textoFormatado = "Setor de Monitores e Telas";
    } else {
      textoFormatado = "Setor Geral";
    }

    return textoFormatado;
  };

  if (!listaProdutos || listaProdutos.length === 0) {
    return (
      <div className="gestao-container aviso-container">
        <h1 className="gestao-titulo">Aviso</h1>
        <p className="gestao-aviso-texto">Não existem produtos cadastrados.</p>
      </div>
    );
  }

  return (
    <div className="gestao-container">
      <h1 className="gestao-titulo">Painel de Inventário</h1>

      {/* ".MAP" PARA PECORRER UMA ARRAY DE PRODUTOS E RENDERIZAR UM CARD PARA CADA PRODUTO, EXIBINDO O NOME DO PRODUTO, A QUANTIDADE EM ESTOQUE, O STATUS DE DISPONIBILIDADE E A LOCALIZAÇÃO DO PRODUTO DE ACORDO COM A CATEGORIA */}

      {listaProdutos.map((item) => (
        <div key={item.id} className="produto-card">
          <h3 className="produto-nome">Produto: {item.nome}</h3>

          <ul className="produto-lista">
            <li className="produto-item">
              <span className="label">Quantidade:</span> {item.estoque}
              {verificarDisponibilidade(item.quantidade)}
            </li>
            <li className="produto-item">
              <span className="label">Status:</span>{" "}
              {verificarDisponibilidade(item.estoque)}
            </li>
            <li className="produto-item">
              <span className="label">Localização:</span>{" "}
              {formatarCategoria(item.categoria)}
            </li>
          </ul>

          <hr className="produto-divisor" />
        </div>
      ))}
    </div>
  );
}

export default GestaoProdutos;
