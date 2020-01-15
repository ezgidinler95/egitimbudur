import React from 'react';

const SingUp = ({ onViewChange }) => (
    <div>
        <form className="form-inline form">
            <div className="form-group mx-sm-3 mb-2">
                <input type="text" className="form-control" placeholder="Email" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">KAYIT OL</button>
        </form>
        <p style={{ fontSize: "20px", marginTop: "30px" }}>
            Zaten Üye Misiniz? <br></br>
            <a href="/#" onClick={e => {
                e.preventDefault();
                onViewChange(1);
            }}> O zaman giriş yapmak için <b>TIKLAYINIZ</b></a>
        </p>

    </div>
)

export default SingUp;