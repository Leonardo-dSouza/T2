import { Component } from "react";
import { Cart4 } from "react-bootstrap-icons";

type props = {
    tema: string
}

export default class FormularioConsumoProduto extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid" style={{ marginLeft: "30px" }}>
                <form>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="CPF do cliente" aria-label="CPF do cliente" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Nome do pet" aria-label="Nome do pet" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3" style={{ width: "600px" }}>
                        <input type="text" className="form-control" placeholder="Nome do produto" aria-label="Nome do produto" aria-describedby="basic-addon1" />
                    </div>
                    <button className="btn btn-secondary" type="submit" style={{ backgroundColor: "#3CB371", width: "120px", marginRight: "20px", marginBottom:"30px"}}>
                        <Cart4/>
                        <span style={{ marginLeft: "0.5rem" }}></span>
                        Comprar
                    </button>
                </form>
            </div>
        )
    }
}
