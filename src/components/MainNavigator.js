import React, { Component }         from 'react';
import logo                         from './img/logo-site-white.svg';
import patternPortal                from './img/patterns/4p.png';
import imagemAvatar                 from './img/a8.jpg';
import ContentInbox                 from 'material-ui/svg-icons/content/inbox';
import ActionGrade                  from 'material-ui/svg-icons/action/grade';
import ContentSend                  from 'material-ui/svg-icons/content/send';
import ContentDrafts                from 'material-ui/svg-icons/content/drafts';
import { List, ListItem }           from 'material-ui/List';
import Drawer                       from 'material-ui/Drawer';
import Paper                        from 'material-ui/Paper';
import Avatar                       from 'material-ui/Avatar';
import IconMenu                     from 'material-ui/IconMenu';
import MenuItem                     from 'material-ui/MenuItem';
import IconButton                   from 'material-ui/IconButton';
import HardwareKeyboardArrowDown    from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

const stylePaperDrawer = {
    height: 200,
    width: '100%',
    margin: 0,
    display: 'inline-block',
    backgroundColor: 'red',
    backgroundImage: 'url(' + patternPortal + ')',
    alignItems: 'center',
    overflowX: 'hidden',
};

class MainNavigator extends Component {

    render() {
        return (
            <div className="main-navigator-container">

                <Drawer width={parseInt(this.props.width)} open={this.props.open}
                        containerClassName="main-navigator-content">
                    <Paper style={stylePaperDrawer} zDepth={1} rounded={false}>
                        <div className="row middle-xsAAA">
                            <div className="col-xs-12">
                                <div className="box">
                                    <img src={logo} alt="Logotipo do projeto" className="img-responsive logo"
                                         style={{
                                             width: 72,
                                             marginLeft: 16,
                                             marginTop: 16,
                                             marginBottom: 0,
                                             opacity: 0.3
                                         }}
                                    />
                                    <List>
                                        <ListItem disabled={true}
                                                  leftAvatar={ <Avatar style={{ top: 29 }} src={imagemAvatar}/> }>
                                            <strong style={{ color: 'white', fontSize: '0.8em' }}>Regina Suzuki</strong>
                                            <IconMenu
                                                iconButtonElement={
                                                    <IconButton><HardwareKeyboardArrowDown /></IconButton>}
                                                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                                                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                                                iconStyle={{ color: 'white' }}
                                                style={{ top: 7 }}
                                            >
                                                <MenuItem primaryText="Settings"/>
                                                <MenuItem primaryText="Sign out"/>
                                            </IconMenu>
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </div>
                    </Paper>
                    <List>
                        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />}/>
                        <ListItem primaryText="Starred" leftIcon={<ActionGrade />}/>
                        <ListItem primaryText="Sent mail" leftIcon={<ContentSend />}/>
                        <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />}/>
                        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />}/>
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default MainNavigator;
