import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'

export default function CardGasto( { params } ) {
  const socket = io('https://tcc-backend-energyadmin.herokuapp.com');
  const [valor, setValor] = useState('0.0')

  useEffect(() => {
    socket.on('gasto', message => {
      setValor(message);
    });

    return () => {
      socket.disconnect()
    }
  }, []);

  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Gasto até o momento</div>
              <div className="h5 mb-0 font-weight-bold text-gray-700">
                R$: { valor }
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-dollar-sign fa-3x text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};