import React from 'react'
import axios from 'axios'

import FormGroup from './components/form-group'
import { mensagemErro } from './components/toastr'

import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/darkly/bootstrap.css'
import './css/custom.css'
import 'toastr/build/toastr.css'
class App extends React.Component {

  state = {
    id: '',
    nome: '',
    email: '',
    telefone: '',
    idade: null,
    tipoConsulta: null,
    usuario: []
  }

  salvar = () => {
    axios.post('http://localhost:8080/api/usuarios', {
        nome: this.state.nome,
        email: this.state.email,
        telefone: this.state.telefone,
        idade: this.state.idade,
        tipoConsulta: this.state.tipoConsulta
    }).then( response => {
        const usuarioRecebido = response.data
        this.setState({usuario: usuarioRecebido})
    }).catch(erro => {
        mensagemErro(erro.response.data)
    })
  }

  render(){
      return(
        <div className="container">
              <legend className="medico">Formulário Médico</legend>
              <FormGroup label="Nome: " htmlFor="exampleInputName">
                <input type="text"
                      value={this.state.nome}
                      onChange={e => this.setState({ nome: e.target.value })} 
                      className="form-control col-md-4" 
                      id="nome" 
                      placeholder="Informe o Nome" />
              </FormGroup>
              <br/><br/>
              <FormGroup label="Email: " htmlFor="exampleInputEmail">
                <input type="email"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}  
                      className="form-control col-md-4" 
                      id="email" 
                      placeholder="Informe o Email" />
              </FormGroup>
              <br/><br/>
              <FormGroup label="Telefone: " htmlFor="exampleInputPhone">
                <input type="telefone"
                      value={this.state.telefone}
                      onChange={e => this.setState({ telefone: e.target.value })}  
                      className="form-control col-md-4" 
                      id="telefone" 
                      placeholder="Informe o Telefone" />
              </FormGroup>
              <br/><br/>
              <FormGroup label="Idade: " htmlFor="exampleInputIdade">
                  <input type="range"
                        value={this.state.idade}
                        min="0" max="100"
                        onChange={e => this.setState({ idade: e.target.value })}    
                        className="custom-range col-md-4" 
                        id="customRange1" />
                  <p id="rangeValue">{this.state.idade}</p>
              </FormGroup>
              <br/><br/>
              <FormGroup label="Tipo de Consulta: " htmlFor="exampleinputSelect">
                <select className="custom-select col-md-4" 
                        value={this.state.tipoConsulta}
                        onChange={e => this.setState({ tipoConsulta: e.target.value })} >
                  <option value="">Selecione a Consulta</option>
                  <option value="Clinico Geral">Clinico Geral</option>
                  <option value="Cardiologia">Cardiologia</option>
                  <option value="Ortopedia">Ortopedia</option>
                  <option value="Pediatria">Pediatria</option>
                </select>
              </FormGroup>
              <br/><br/>
              <button onClick={this.salvar} type="submit" className="btn btn-primary">Enviar</button> 
              <br/><br/>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Tipo Da Consulta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{this.state.id}</th>
                    <td>{this.state.usuario.nome}</td>
                    <td>{this.state.usuario.email}</td>
                    <td>{this.state.usuario.telefone}</td>
                    <td>{this.state.usuario.idade}</td>
                    <td>{this.state.usuario.tipoConsulta}</td>
                  </tr>
                </tbody>
              </table>           
        </div>
      )
  }
}

export default App;