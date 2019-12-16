import React, { useEffect, useState } from 'react';
var moment = require('moment')


export default function Tabela({dadosLeituras, dadosConsumos}) {
  const [leituras, setLeituras] = useState([])
  const [consumos, setConsumos] = useState([])

  useEffect(() => {  
    if(Object.keys(dadosLeituras).length){
      var elemento = []
      dadosLeituras.forEach(element => {
        elemento.push(element)
      });
      setLeituras(elemento)
    }
  }, [dadosLeituras]);
  
  useEffect(() => {  
    if(Object.keys(dadosConsumos).length){
      setConsumos(dadosConsumos)
    }
  }, [dadosConsumos]); 
  
  return (
    <>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Consumo em corrente</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Consumo em potência</a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Tabela de consumo em corente</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover table-sm" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Dispositivo</th>
                      <th>Tipo de medição</th>
                      <th>Medição</th>
                      <th>Momento da medição</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Dispositivo</th>
                      <th>Tipo de medição</th>
                      <th>Medição</th>
                      <th>Momento da medição</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {
                      leituras.map((elemento, index) => {
                        return(
                          <tr key={index}>
                            <td>Dispositivo A</td>
                            <td>Corrente</td>
                            <td>{parseFloat(elemento.corrente).toFixed(2)} A</td>
                            <td>{moment(elemento.createdAt).format('Do MMM, h:mm:ss a')}</td>
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

        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        
        
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Tabela de consumo em potência</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover table-sm" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Dispositivo</th>
                      <th>Tipo de medição</th>
                      <th>Medição</th>
                      <th>Momento da medição</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Dispositivo</th>
                      <th>Tipo de medição</th>
                      <th>Medição</th>
                      <th>Momento da medição</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {
                      consumos.map((elemento, index) => {
                        return(
                          <tr key={index}>
                            <td>Dispositivo A</td>
                            <td>Potência</td>
                            <td>{parseFloat(elemento.watts)} W</td>
                            <td>{moment(elemento.createdAt).format('Do MMM, h:mm:ss a')}</td>
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