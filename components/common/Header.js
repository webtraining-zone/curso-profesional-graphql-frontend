import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
  render() {
    return (
        <header className={'b-header'}>
          <nav id="navbar" className="navbar navbar-light bg-primary">
            <div className="container">
              <Link href="/">
                <a className="navbar-brand" href="#">Library</a>
              </Link>
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Link href="/books">
                    <a className="nav-link" href="#">Books</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/books/create">
                    <a className="nav-link" href="#">Create</a>
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
