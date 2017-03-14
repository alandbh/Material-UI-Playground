import React, { Component }   from 'react';
import injectTapEventPlugin   from 'react-tap-event-plugin';
import { indigo500, red500 }  from 'material-ui/styles/colors';
import MuiThemeProvider       from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme            from 'material-ui/styles/getMuiTheme';
import AppBar                 from 'material-ui/AppBar';
import Paper                  from 'material-ui/Paper';
import MainNavigator          from './components/MainNavigator';
import PesquisaCotep          from './components/PesquisaCotep';
import DataTableWes           from './components/DataTableWes';
import DataTable              from './components/DataTable';
import './App.css';
import './css/flexboxgrid.css';
import './components/css/materialize.css';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: red500,
        accent1Color: indigo500,
    },
});

// Detecta se é dispositivo móvel
let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        if (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() != null) {
            return true;
        }
    },
    models: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    },
};

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const stylePaperContent = {
    //marginTop: -50,
    minHeight: 150, padding: 20
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: isMobile.any(),
            drawerOpen: !isMobile.any(),
        };
    }

    handleToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen });

    render() {
        return (
            <div
                className={(this.state.drawerOpen ? "menu-open-true App" : "menu-open-false App") + ' ' + (this.state.isMobile ? "is-mobile" : "is-not-mobile")}>

                <MuiThemeProvider muiTheme={muiTheme}>
                    <div className="wrapper">
                        <MainNavigator width="260" open={this.state.drawerOpen}/>

                        <div id="main-content" className="containerAAA">

                            <AppBar title="Highest page title" zDepth={0} onLeftIconButtonTouchTap={this.handleToggle}
                                    className="app-bar"/>

                            <div className="App-header" style={{ backgroundColor: muiTheme.palette.primary1Color }}>
                                <h2 style={{ paddingLeft: '1rem' }}>Contextual title</h2>
                            </div>


                            <div className="container-fluid" style={{ marginTop: '0px', position: 'relative', }}>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <Paper style={stylePaperContent} zDepth={2}>

                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <div className="box">
                                                        <PesquisaCotep/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <div className="box">
                                                        <DataTableWes/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <div className="box">
                                                        <DataTable/>
                                                    </div>
                                                </div>
                                            </div>

                                        </Paper>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
