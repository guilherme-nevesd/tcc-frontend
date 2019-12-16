import React from 'react';
import api from '../services/api'

export default function Form() {
  const $ = window.$; 


  async function enviarDados(e){
    e.preventDefault()
    let valid = $('#client-id').val() &&   $('#host-aws').val() &&  $('#private-key-aws').val() && $('#private-key-aws').val() &&  $('#certificate-aws').val() && $('#root-certificate-aws').val()
    if((!valid)){
      $.notify("Preencha todos os campos", "warn");
    }
    let dados = {
      "client_id": $('#client-id').val(),
      "host_aws": $('#host-aws').val(),
      "private_key_aws": $('#private-key-aws').val(),
      "certificate_aws": $('#certificate-aws').val(),
      "root_certificate_aws": $('#root-certificate-aws').val(),
      "status": "Inoperante"
    }
    const response = await api.post('/cadastro', dados);
    if(response.status === 200){
      $.notify("Cadastro realizado com sucesso!!", "success");
      $('#cadastro-form').trigger("reset");
      setTimeout(function(){ window.location.reload(); }, 1000);
    } else {
      $.notify("Erro ao cadastrar!", "error");
    }
  }

  return (
    <div className="card shadow mb-4">
    <div className="card-header py-3">
      <h6 className="m-0 font-weight-bold text-primary">Cadastre um novo dispositivo</h6>
    </div>
    <div className="card-body">
      <div className="col-lg-12 mb-4">
      <form id="cadastro-form">
        <div className="form-group">
          <label>Client ID</label>
          <input type="text" className="form-control" id="client-id"></input>
          <small id="legenda" className="form-text text-muted">Nome de identificação cadastrado na AWS.</small>
        </div>
        <div className="form-group">
          <label>Host AWS</label>
          <input type="text" className="form-control" id="host-aws"></input>
          <small id="legenda" className="form-text text-muted">Endpoint gerado pela AWS após o cadastro.</small>
        </div>
        <div className="form-group">
          <label>Private Key AWS</label>
          <textarea className="form-control" id="private-key-aws" rows="3"></textarea>
          <small id="legenda" className="form-text text-muted">Chave privada gerada pela AWS.</small>
        </div>
        <div className="form-group">
          <label>Certificate AWS</label>
          <textarea className="form-control" id="certificate-aws" rows="3"></textarea>
          <small id="legenda" className="form-text text-muted">Certificado gerado pela AWS.</small>
        </div>
        <div className="form-group">
          <label>Root Certificate AWS</label>
          <textarea className="form-control" id="root-certificate-aws" rows="3"></textarea>
          <small id="legenda" className="form-text text-muted">Certificado para permitir acesso a AWS.</small>
        </div>
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={e => enviarDados(e)}>
          Enviar
        </button>
      </form>
      </div>
    </div>
  </div>

  );
};