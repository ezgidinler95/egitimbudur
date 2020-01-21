import React from 'react';
import { connect } from 'react-redux';

class NoteCalculation extends React.Component {

    render() {
        return (
            <div>
                <p> NOT HESAPLAMA SAYFASI </p>
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

}

export default connect(mapStateToProps, mapDispatchToProps)(NoteCalculation);