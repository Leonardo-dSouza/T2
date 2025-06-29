import { Component } from "react";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";

type Props = {
  nome: string;
  nomeSocial: string;
  cpf: string;
  rg: string;
  produtosConsumidos: string;
  servicosConsumidos: string;
};

export default class DetalhesCliente extends Component<Props> {
  render() {
    const { nome, nomeSocial, cpf, rg, produtosConsumidos, servicosConsumidos } = this.props;
    return (
      <div style={{ marginLeft: "40px", marginTop: "30px"}}>
        <p><b>Nome:</b> {nome}</p>
        <p><b>Nome Social:</b> {nomeSocial}</p>
        <p><b>CPF:</b> {cpf}</p>
        <p><b>RG:</b> {rg}</p>
        <p><b>Produtos consumidos:</b> {produtosConsumidos}</p>
        <p><b>Serviços consumidos:</b> {servicosConsumidos}</p>
        
        <button type="button" className="btn btn-success" style={{ width: "100px", marginRight: "20px"}}>
        <PencilSquare/>
        <span style={{ marginLeft: "0.5rem" }}></span>
          Editar
        </button>
        <button type="button" className="btn btn-danger" style={{ width: "100px", left:"10px" }}>
        <TrashFill/>
        <span style={{ marginLeft: "0.5rem" }}></span>
          Excluir
        </button>
      </div>
    );
  }
}
