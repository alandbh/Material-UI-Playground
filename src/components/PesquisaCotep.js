import React, { Component }    from 'react';
import TextField               from 'material-ui/TextField';
import RaisedButton            from 'material-ui/RaisedButton';
import ChipInputApi            from './ChipInputApi';

class PesquisaCotep extends Component {

    render() {
        return (
            <div className="pesquisa-cotep-container">

                <div className="row">
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <TextField
                            hintText="xxx.xxx"
                            floatingLabelText="Text field"
                            fullWidth={true}
                        />
                    </div>
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <TextField
                            hintText="aaaa"
                            type='number'
                            floatingLabelText="Number field"
                            fullWidth={true}
                        />
                    </div>
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <TextField
                            floatingLabelText="Text field"
                            fullWidth={true}
                        />
                    </div>

                    <div className="col-xs-12">
                        <ChipInputApi/>
                    </div>
                </div>

                <div className="row end-xs" style={{ marginTop: '25px' }}>
                    <div className="col-xs-6">
                        <div className="box">
                            <RaisedButton label="Ação secundária"/>
                            <RaisedButton label="Ação primária" primary={true}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PesquisaCotep;
