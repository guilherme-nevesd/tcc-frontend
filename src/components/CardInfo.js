import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'

const bandeiras = ['Bandeira Verde', 
                   'Bandeira Amarela', 
                   'Bandeira Vermelha P1', 
                   'Bandeira Vermelha P2'
                  ]

export default function CardGasto() {
  const socket = io('localhost:3333');
  const [tensao, setTensao] = useState('0')
  const [bandeira, setBandeira] = useState('---')

  useEffect(() => {
    socket.on('info', message => {
      setTensao(message[0]);
      setBandeira(bandeiras[message[1]])
    });

    return () => {
      socket.disconnect()
    }
  }, []);

  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-info shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Informações</div>
              <div className="h6 mb-0 font-weight-bold text-gray-700">
                Tensão: { tensao } V <br/>
                { bandeira } <br/>
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-info fa-3x text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
       