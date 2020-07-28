import React from "react";

export default function Sidebar(props) {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon">
          <i className="fas fa-chart-line"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Admin</div>
      </a>

      <hr className="sidebar-divider my-0" />

      {props.items.map((item, index) => {
        return (
          <li className="nav-item active" key={"Item"+index}>
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>{item}</span>
            </a>
          </li>
        );
      })}

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}
