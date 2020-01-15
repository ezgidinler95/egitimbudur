import React from 'react';

const PasswordReset = ({ onViewChange }) => (
    <div>
        <form className="form-inline form">
            <div className="form-group mx-sm-3 mb-2">
                <input type="text" className="form-control" placeholder="Email" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">ŞİFREMİ RESETLE</button>
        </form>
        <p style={{ fontSize: "20px", marginTop: "30px" }}>
            <a href="/#" onClick={e => {
                e.preventDefault();
                onViewChange(1);
            }} >Giriş ekranı için <b>TIKLAYINIZ</b></a>
        </p>
    </div>
)

export default PasswordReset;