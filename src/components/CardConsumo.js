import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'

export default function CardConsumo() {
  const socket = io('https://tcc-backend-energyadmin.herokuapp.com');
  const [potenciaDia, setPotenciaDia] = useState('0.0')

  useEffect(() => {
    socket.on('consumo', message => {
      setPotenciaDia(parseFloat(message).toFixed(2));
    });

    return () => {
      socket.disconnect()
    }
  }, []);

  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-warning shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Consumo Acumulado</div>
              <div className="h5 mb-0 font-weight-bold text-gray-700">
                { potenciaDia } Kw/h
              </div>
            </div>
            <div className="col-auto">
              <i className="fab fa-medapps fa-3x text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};