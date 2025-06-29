import React, { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioConsumoProduto from "./formularioConsumoProduto";
import FormularioConsumoServico from "./formularioConsumoServico";
import ListaCliente from "./listaClientes";
import ListaPet from "./listaPets";
import ListaServico from "./listaServicos";
import ListaProduto from "./listaProdutos";
import ListaClientesMaisConsumiramQuantidade from "./listaClientesMaisConsumiramQuantidade";
import ListaGeralMaisConsumidos from "./listaGeralMaisConsumidos";
import ListaServProdMaisConsumidosTipoRaca from "./listaServProdMaisConsumidosTipoRaca";
import ListaClientesMaisConsumiramValor from "./listaClientesMaisConsumiramValor";
import DetalhesCliente from "./detalhesCliente";
import DetalhesPet from "./detalhesPet";
import DetalhesProduto from "./detalhesProduto";
import DetalhesServico from "./detalhesServico";
import { BalloonFill, Cart4, CashCoin, Gem, ListUl, PersonFill, PersonFillAdd, ShopWindow, TrophyFill } from "react-bootstrap-icons";

type state = {
  tela: string,
  clienteSelecionado: null | string
  petSelecionado: null | string
};

export default class Roteador extends Component<{}, state> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      tela: "Cadastros",
      clienteSelecionado: null,
      petSelecionado: null
    };
    this.selecionarView = this.selecionarView.bind(this);
  }

  selecionarView(novaTela: string, evento: React.MouseEvent<HTMLAnchorElement>) {
    evento.preventDefault();
    this.setState({
      tela: novaTela,
      clienteSelecionado: evento.currentTarget.getAttribute("data-cliente-id"),
      petSelecionado: evento.currentTarget.getAttribute("data-pet-id"),
    });
  }

  render() {
    const barraNavegacao = (
      <BarraNavegacao 
        seletorView={this.selecionarView}
        tema="#3CB371"
        botoes={["Cadastros", "Shopping", "Clientes", "Pets", "Produtos", "Serviços", "Consumos"]}
      />
    );

    if (this.state.tela === "Clientes") {
      return (
        <>
          {barraNavegacao}
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
          <PersonFill/>
          <span style={{ marginLeft: "0.5rem" }}></span>
          Lista de Clientes</h2>
          <ListaCliente tema="#e3f2fd" seletorView={this.selecionarView} />
        </>
      );
    }

    if (this.state.tela === "Cadastros") {
      return (
        <>
          {barraNavegacao}
          <h2 style={{fontWeight:"lighter", marginLeft: "50px" }}>
          <PersonFillAdd/>
          <span style={{ marginLeft: "0.5rem" }}></span>
            Cadastrar um cliente
          </h2>
          <FormularioCadastroCliente tema="#e3f2fd" />
          <h2 style={{fontWeight:"lighter", marginLeft: "50px" }}>
          <BalloonFill/>
          <span style={{ marginLeft: "0.5rem" }}></span>
            Cadastrar um Pet
          </h2>
          <FormularioCadastroPet tema="#e3f2fd" />
          <h2 style={{fontWeight:"lighter", marginLeft: "50px" }}>
          <Cart4/>
          <span style={{ marginLeft: "0.5rem" }}></span>
            Cadastrar um produto
          </h2>
          <FormularioCadastroProduto tema="#e3f2fd" />
          <h2 style={{fontWeight:"lighter", marginLeft: "50px" }}>
          <ShopWindow/>
          <span style={{ marginLeft: "0.5rem" }}></span>
            Cadastrar um serviço
          </h2>
          <FormularioCadastroServico tema="#e3f2fd" />
        </>
      );
    }

    if (this.state.tela === "Pets") {
      return (
        <>
          {barraNavegacao}
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
          <BalloonFill/>
          <span style={{ marginLeft: "0.5rem" }}></span>
            Lista de Pets
          </h2>
          <ListaPet tema="#e3f2fd" seletorView={this.selecionarView}/>
        </>
      );
    }


    if (this.state.tela === "Produtos") {
      return (
        <>
          {barraNavegacao}
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
          <Cart4/>
          <span style={{ marginLeft: "0.5rem" }}></span>
            Lista de Produtos
          </h2>
          <ListaProduto tema="#e3f2fd" seletorView={this.selecionarView}/>
        </>
      );
    }

    if (this.state.tela === "Serviços") {
      return (
        <>
          {barraNavegacao}
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
          <ShopWindow/>
          <span style={{ marginLeft: "0.5rem" }}></span>
            Lista de Serviços
          </h2>
          <ListaServico tema="#e3f2fd" seletorView={this.selecionarView}/>
        </>
      );
    }

    if (this.state.tela === "Shopping") {
      return (
        <>
          {barraNavegacao}
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
          <Cart4/>
          <span style={{ marginLeft: "0.5rem" }}></span>
            Comprar um produto
          </h2>
          <FormularioConsumoProduto tema="#e3f2fd" />
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
          <ShopWindow/>
          <span style={{ marginLeft: "0.5rem" }}></span>
            Contratar um serviço
          </h2>
          <FormularioConsumoServico tema="#e3f2fd" />
        </>
      );
    }

    if (this.state.tela === "Consumos") {
      return (
        <>
          {barraNavegacao}
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
          <TrophyFill/>
          <span style={{ marginLeft: "0.5rem" }}></span>
            Lista dos 10 clientes que mais consumiram em quantidade
          </h2>
          <ListaClientesMaisConsumiramQuantidade tema="#e3f2fd" />
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
          <ListUl/>
          <span style={{ marginLeft: "0.5rem" }}></span>
            Lista geral dos Serviços/Produtos mais consumidos
          </h2>
          <ListaGeralMaisConsumidos tema="#e3f2fd" />
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
          <Gem/>
          <span style={{ marginLeft: "0.5rem" }}></span>
            Lista dos Serviços/Produtos mais consumidos por tipo e Raça de pets
          </h2>
          <ListaServProdMaisConsumidosTipoRaca tema="#e3f2fd" />
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
          <CashCoin/>
          <span style={{ marginLeft: "0.5rem" }}></span>
            Lista dos 5 clientes que mais consumiram em valor
          </h2>
          <ListaClientesMaisConsumiramValor tema="#e3f2fd" />
        </>
      );
    }

    if (this.state.tela === "DetalhesCliente") {
      const detalhesCliente = {
        nome: "Nome do cliente",
        nomeSocial: "Nome social",
        cpf: "000.000.000-00",
        rg: "00.000.000-0",
        produtosConsumidos: "produtos",
        servicosConsumidos: "serviços",
      };

      return (
        <>
          {barraNavegacao}
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
            Detalhes do Cliente
          </h2>
          <DetalhesCliente {...detalhesCliente} />
        </>
      );
    }

    if (this.state.tela === "DetalhesPet") {
      const detalhesPet = {
        cliente: 'Cliente',
        nome: 'Pet',
        tipo: 'Tipo',
        raca: 'Raça',
        genero: 'Gênero'
      };

      return (
        <>
          {barraNavegacao}
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
            Detalhes do Pet
          </h2>
          <DetalhesPet {...detalhesPet} />
        </>
      );
    }

    if (this.state.tela === "DetalhesProduto") {
      const detalhesProduto = {
        nome: 'Produto',
        valor: 'Valor'
      };

      return (
        <>
          {barraNavegacao}
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
            Detalhes do Produto
          </h2>
          <DetalhesProduto {...detalhesProduto} />
        </>
      );
    }

    if (this.state.tela === "DetalhesServico") {
      const detalhesServico = {
        nome: 'Servico',
        valor: 'Valor'
      };

      return (
        <>
          {barraNavegacao}
          <h2 style={{fontWeight:"lighter", marginLeft: "40px" }}>
            Detalhes do Serviço
          </h2>
          <DetalhesServico {...detalhesServico} />
        </>
      );
    }

    return null;
  }
}