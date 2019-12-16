import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'

export default function CardRealTime() {
  const [corrente, setCorrente] = useState('0.0')
  const [potencia, setPotencia] = useState('')
  const socket = io('https://tcc-backend-energyadmin.herokuapp.com');
  var fatorCorrente = 0.094488189;  
  var fator5s = 5/3600;
  
  useEffect(() => {
    socket.on('leitura', message => {
      setCorrente(parseFloat(message.corrente).toFixed(2));
      let calc = parseFloat( (message.corrente * 127 * fator5s).toFixed(2) );
      setPotencia(calc);
    });

    return () => {
      socket.disconnect()
    }
  }, []);
  
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Tempo Real</div>
              <div className="h5 mb-0 font-weight-bold text-gray-700">
                { corrente } A <br/>
                { potencia } W/h
              </div>
            </div>
            <div className="col-auto">
              <i className="far fa-clock fa-3x text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};