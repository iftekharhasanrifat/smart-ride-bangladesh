import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push('/login')
  }
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { name } = loggedInUser;

  return (
    <nav className="container navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="/home">
          <h1 className="navbar-brand" href="#">
            <FontAwesomeIcon icon={faBus} /><span> Smart Ride</span>
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/home"
                className="nav-link active"
                aria-current="page"
              >
                Home
                </Link>
            </li>
            <li className="nav-item">
              <Link to="/ride/1bike" className="nav-link active">
                Destination
                </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link active">
                Blog
                </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active">
                Contact
                </Link>
            </li>
            <li className="nav-item">
              {
                name ? <Link to="" className="nav-link disabled">
                  <strong className="text-dark">{name}</strong>
                </Link>
                  : <button onClick={handleClick} className="nav-link btn btn-danger btn-lg text-white p-1">
                    Login
                </button>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Header;