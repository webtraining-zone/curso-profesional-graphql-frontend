import React from 'react';
import Link from 'next/link';

const linkStyle = {
  margin: '0 10px 0 0',
};

class Header extends React.Component {
  render() {
    return (
        <header className={'b-header'}>
          <nav id="navbar" className="navbar navbar-light">
            <div className="container">
              <Link href="/">
                <a className="navbar-brand" href="#" style={linkStyle}>
                  <img src="/static/images/logo.svg" alt="GraphLib"
                       className="text-center img-fluid" width="32"/>
                  <span className="ml-2 d-inline-block">GraphyLib</span>
                </a>
              </Link>
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Link href="/books">
                    <a className="nav-link" href="#" style={linkStyle}>Books</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/books/create">
                    <a className="nav-link" href="#" style={linkStyle}>Create</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
    );
  }
}

export default Header;
