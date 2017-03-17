import React, { PropTypes, Component }  from 'react';
import AutoComplete                     from 'material-ui/AutoComplete';
import axios                            from 'axios';

class AutoCompleteApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dados: [],
            textInserted: '',
            url: '',
        };
    };

    handleNewRequest() {
        console.log('INI----------');
        console.log('popopo');
        console.log('FIM----------');
        this.props.handleNewRequestPai;
    };


    handleUpdateInput = (value) => {
        let component = this;
        if (value.length >= 2) {
            let _url = 'https://api.github.com/search/users?q=' + value + '&order=asc&page=1&per_page=30';
            setTimeout(function () {
                component.setState({
                    textInserted: value,
                    url: _url,
                });
            }, 300);

            console.log('text: ' + component.state.url);
            component.componentDidMount();

        }

    };

    componentDidMount() {
        let component = this;
        axios.get(component.state.url)
            .then(function (response) {
                let _usersPaged = response.data.items;
                let usersPaged = _usersPaged.map((dados) => dados.login);

                component.setState({
                    dados: usersPaged,
                });
                //let result = _usersPaged.map(function(a) {return a.login;});
                console.log(component.state.dados);
                console.log('separa');
                console.log(component.props.perPage);

            })
            .catch(function (error) {
                console.log(error);
                //console.log(usersPaged);
            });
    }

    render() {
        return (
            <div className="muiltiselect-container">
                <AutoComplete
                    floatingLabelText="Github user"
                    filter={AutoComplete.fuzzyFilter}
                    dataSource={this.state.dados}
                    maxSearchResults={10}
                    onUpdateInput={this.handleUpdateInput}
                    onNewRequest={this.props.handleNewRequestPai}
                    fullWidth={true}
                />
                <pre>
                    {this.state.dados.splice()}
                </pre>
            </div>
        )
    }
}

export default AutoCompleteApi
