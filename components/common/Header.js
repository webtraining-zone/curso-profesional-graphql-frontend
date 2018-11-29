import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <header className={"b-header"}>
          <nav id="navbar" className="navbar navbar-light bg-primary">
            <div className="container">
              <a className="navbar-brand" href="#">Library</a>
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="#">Books</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Create</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
    );
  }
}

export default Header;
