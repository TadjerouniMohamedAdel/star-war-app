import React, { FC, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

type Props = {
  children: ReactNode | ReactNode[];
};

const MainLayout: FC<Props> = ({ children }) => {
  const location = useLocation();
  return (
    <div className="layout-container">
      <nav>
        <div className="logo-box">
          <img src="/star-wars.png" alt="" />
        </div>
        <h2>Menus</h2>
        <ul>
          <Link to="/movies">
            <li
              className={`link ${
                location.pathname.match(/movies/) && 'active'
              }`}
            >
              <i className="bx bxs-camera-movie" />
              <span>Movies</span>
            </li>
          </Link>
          <Link to="/planetes">
            <li
              className={`link ${
                location.pathname.match(/planetes/) && 'active'
              }`}
            >
              <i className="bx bxs-planet" />
              <span> Planetes</span>
            </li>
          </Link>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
