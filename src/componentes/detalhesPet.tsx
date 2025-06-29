import { Component } from "react";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";

type Props = {
  cliente: string;
  nome: string;
  tipo: string;
  raca: string;
  genero: string;
};

export default class DetalhesPet extends Component<Props> {
  render() {
    const { cliente ,nome, tipo, raca, genero } = this.props;
    return (
      <div style={{ marginLeft: "40px", marginTop: "30px"}}>
        <p><b>Dono:</b> {cliente}</p>
        <p><b>Nome:</b> {nome}</p>
        <p><b>Tipo:</b> {tipo}</p>
        <p><b>Raça:</b> {raca}</p>
        <p><b>Gênero:</b> {genero}</p>
        
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
