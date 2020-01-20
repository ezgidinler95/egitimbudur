import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actionts/user';


class SingUp extends React.Component {

    handleAddUserSubmit = async (e, state) => {
        const user = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };
        await this.props.addUser(user);
        if (this.props.addUserResult.code === 200) {
            alert("Yeni üye başarıyla eklendi")
        }
    }

    render() {
        const onViewChange = this.props.onViewChange;
        return (
            <div>
                <form className="form-inline form" onSubmit={(e) => { e.preventDefault(); this.handleAddUserSubmit(e, this.state) }}>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" name="name" placeholder="Adınız" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" name="surname" placeholder="Soyadınız" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" name="password" placeholder="Şifre" />
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
    }
}


const mapStateToProps = ({ userReducer, }) => {
    return {
        ...userReducer,

    }
}

const mapDispatchToProps = {
    addUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);






