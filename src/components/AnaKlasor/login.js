import React from 'react';

class Login extends React.Component {
    render() {
        const onViewChange = this.props.onViewChange;
        return (
            <div>
                <form className="form-inline form">
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button type="button" className="btn btn-primary mb-2">GİRİŞ YAP</button>
                    <div className="sifreunuttum">
                        <a href="/#" onClick={e => {
                            e.preventDefault();
                            onViewChange(3);
                        }}>ŞİFREMİ UNUTTUM</a>
                    </div>
                </form>
                <p style={{ fontSize: "20px", marginTop: "30px" }}>
                    Henüz üye olmadınız mı? <br></br>
                    <a href="/#" onClick={e => {
                        e.preventDefault();
                        onViewChange(2);
                    }} > Ücretsiz üye olmak için <b>TIKLAYINIZ</b></a>
                </p>
            </div>
        )
    }
}

export default Login;