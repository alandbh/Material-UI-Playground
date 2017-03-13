import React, { Component } from 'react';

import myTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Paper                        from 'material-ui/Paper';
import TextField                    from 'material-ui/TextField';

import IconButton                   from 'material-ui/IconButton';
import MoreVertIcon                 from 'material-ui/svg-icons/navigation/more-vert';
import HardwareKeyboardArrowDown    from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import FlatButton                   from 'material-ui/FlatButton';
import RaisedButton                 from 'material-ui/RaisedButton';

import AutoCompleteApi              from './AutoCompleteApi';
import ChipInputApi                 from './ChipInputApi';


class PesquisaCotep extends Component {


  render() {
    return (
      <div className="pesquisa-cotep-container">

            <div className="row">
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <TextField
                  hintText="xxx.xxx"
                  floatingLabelText="Text field"
                  fullWidth={true}
                />
              </div>
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <TextField
                  hintText="aaaa"
                  type='number'
                  floatingLabelText="Number field"
                  fullWidth={true}
                />
              </div>
              <div className="col-lg-4 col-sm-6 col-xs-12">
                <TextField
                  floatingLabelText="Text"
                  fullWidth={true}
                />
              </div>

              
              <div className="col-xs-12">

                <ChipInputApi></ChipInputApi>

              </div>
            </div>

            <div className="row end-xs" style={{marginTop: '25px'}}>
              <div className="col-xs-6">
                  <div className="box">
                    <FlatButton style={{marginRight: '15px'}} label="Ação secundária" />
                    <RaisedButton label="Ação primária" primary={true}/>
                  </div>
              </div>
            </div>

      </div>
    );
  }
}

export default PesquisaCotep;
