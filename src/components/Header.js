import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header>
                <nav className="container navbar navbar-expand-lg navbar-light justify-content-between ">
                    <a className="navbar-brand logo" href="/#">Eğitim Budur</a>

                    <button class="navbar-toggler" type="button" >  <span class="navbar-toggler-icon"></span> </button>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link activeClassName="active" className="nav-link anasayfayazisi" to='/' href="">ANA SAYFA</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClassName="active" className="nav-link anasayfayazisi" to='/hakkımızda' href="">HAKKIMIZDA</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClassName="active" className="nav-link anasayfayazisi" to='/iletisim' href="">İLETİŞİM</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default (Header);