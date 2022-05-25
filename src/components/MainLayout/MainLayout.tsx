import React, { FC, ReactNode } from 'react';
import './styles.css';

type Props = {
  children: ReactNode | ReactNode[];
};

const MainLayout: FC<Props> = ({ children }) => (
  <div className="layout-container">
    <nav>
      <div className="logo-box">
        <img src="/star-wars.png" alt="" />
      </div>
      <h2>Menus</h2>
      <ul>
        <li className="link active">
          <i className="bx bxs-camera-movie" />
          <span>Movies</span>
        </li>
        <li className="link">
          <i className="bx bxs-planet" />
          <span> Planetes</span>
        </li>
      </ul>
    </nav>
    <main>{children}</main>
  </div>
);

export default MainLayout;
