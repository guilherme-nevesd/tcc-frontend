import React, { useEffect, useState } from 'react';
const axios = require('axios');

export default function Tabela({dadosLeituras, dadosConsumos}) {
  const [cadastros, setCadastros] = useState([])

  useEffect(() => {
    var mounted = true
    var getCadastros = async function(){
      await axios.get('https://tcc-backend-energyadmin.herokuapp.com/cadastros').then(response => {
        // leituras = response.data
        if(mounted){
          setCadastros(response.data)
        }
      });
    }

    getCadastros()
    
    return () => {
      mounted = false
    }
  }, []);

  return (
    <>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Dispositivos cadastrados</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover table-sm" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Dispositivo</th>
                      <th>Host AWS</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cadastros.map((elemento, index) => {
                        return(
                          <tr key={index}>
                            <td>{elemento.client_id}</td>
                            <td>{elemento.host_aws}</td>
                            <td>{elemento.status}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};