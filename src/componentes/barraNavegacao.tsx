/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { ArrowThroughHeart, ArrowThroughHeartFill, Cart4 } from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    tema: string,
    botoes: string[],
    seletorView: Function
}

export default class BarraNavegacao extends Component<props>{
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this)
    }


    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = this.props.botoes.map(valor =>
                <li key={valor} className="nav-item">
                    <a className="nav-link" href="#" onClick={(e) => this.props.seletorView(valor, e)}style={{fontWeight:"lighter",fontSize: "1.2rem",color: "#fff", textShadow: "2px 2px 2px #333"}}>{valor}</a>
                </li>
            )
            return lista
        }
    }

    render() {
        let tema = this.props.tema
        return (
            <>
                <nav className="navbar navbar-expand-lg" data-bs-theme="light" style={{backgroundColor: "#3CB371", marginBottom: 10 }}>
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1" style={{fontWeight:"bold",fontSize: "2rem", margin: "0rem 0rem", padding: "1rem 1rem" , color: "#faf6f6", fontStyle: "italic", textDecoration: "underline"}}>
                        <ArrowThroughHeartFill color="#fff"/>
                        <span style={{ marginLeft: "0.5rem" }}></span>
                        PetLovers</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {this.gerarListaBotoes()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}