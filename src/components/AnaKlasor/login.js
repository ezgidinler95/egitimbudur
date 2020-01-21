import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actionts/user';


class Login extends React.Component {


    handleLoginUser = async (e, state) => {
        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        await this.props.loginUser(user);
        if (this.props.loginUserResult.code === 200) {
            window.location.href = "/note-calculation";
        }
    }

    render() {
        const onViewChange = this.props.onViewChange;
        return (
            <div>
                <form className="form-inline form" onSubmit={(e) => { e.preventDefault(); this.handleLoginUser(e, this.state) }}>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" name="email" placeholder="Email" />
                    </div>

                    <div className="form-group mx-sm-3 mb-2">
                        <input type="password" className="form-control" name="password" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary mb-2">GİRİŞ YAP</button>

                    <div className="sifreunuttum"> <a href="/#" onClick={e => { e.preventDefault(); onViewChange(3); }}>ŞİFREMİ UNUTTUM</a></div>

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
const mapStateToProps = ({ userReducer, }) => {
    return {
        ...userReducer,

    }
}

const mapDispatchToProps = {
    loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
