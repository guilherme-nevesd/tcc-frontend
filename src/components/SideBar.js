import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar({ history }) {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <Link className="sidebar-brand d-flex align-items-center justify-content-center" to='/'>
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-power-off"></i>
        </div>
        <div className="sidebar-brand-text mx-3">EnergyAdmin</div>
      </Link>

      <hr className="sidebar-divider my-0"/>

      <li className="nav-item">
        <Link className="nav-link" to='/'>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider my-0"/>

      <li className="nav-item">
        <Link className="nav-link" to='/historico'>
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Histórico</span>
        </Link>
      </li>

      <hr className="sidebar-divider my-0"/>

      <li className="nav-item">
        <Link className="nav-link" to='/controle'>
          <i className="fas fa-fw fa-table"></i>
          <span>Controle</span>
        </Link>
      </li>

      <hr className="sidebar-divider my-0"/>

      <li className="nav-item">
        <Link className="nav-link" to='/cadastro'>
          <i className="far fa-fw fa-plus-square"></i>
          <span>Cadastro</span>
        </Link>
      </li>
      

      <hr className="sidebar-divider d-none d-md-block"/>

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
};