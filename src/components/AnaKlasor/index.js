import React, { Component } from 'react';
import Login from './Login';
import SingUp from './SignUp';
import PasswordReset from './PasswordReset';

class Index extends Component {

    constructor(props) {
        super(props);
        // 1 giriş ekranı
        // 2 kayıt ekranı
        // 3 şifre ekranı
        this.state = {
            currentView: 1
        };
    }

    changeView(newView) {
        this.setState({
            currentView: newView
        })
    }

    render() {
        const view = this.state.currentView === 1 ? <Login onViewChange={this.changeView.bind(this)} /> :
            this.state.currentView === 2 ? <SingUp onViewChange={this.changeView.bind(this)} /> : <PasswordReset onViewChange={this.changeView.bind(this)} />
        return (
            <div >
                {view}
            </div>
        )
    }
}

export default (Index);