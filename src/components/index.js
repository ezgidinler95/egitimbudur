import React, { Component } from 'react';

class Index extends Component {

    render() {
        return (
            <div className="home-container">
                <h1> öğretmenlerin yeni adresi</h1>
                <form className="form-inline form">
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">GİRİŞ YAP</button>
                    <div className="sifreunuttum">
                        <a href="/#">ŞİFREMİ UNUTTUM</a>
                    </div>
                </form>
                <p style={{ fontSize: "20px", marginTop: "30px" }}>
                    Henüz üye olmadınız mı? <br></br>
                    <a href="/#"> Ücretsiz üye olmak için <b>TIKLAYINIZ</b></a>

                </p>
            </div>
        )
    }
}

export default (Index);