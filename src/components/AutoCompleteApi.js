import React, { PropTypes, Component } from 'react';


import myTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Chip from 'material-ui/Chip';
import AutoComplete from 'material-ui/AutoComplete';

import axios from 'axios';

const fruit = [
'Apple', 'Apricot', 'Avocado',
'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
'Boysenberry', 'Blood Orange',
'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
'Coconut', 'Cranberry', 'Clementine',
'Damson', 'Date', 'Dragonfruit', 'Durian',
'Elderberry',
'Feijoa', 'Fig',
'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
'Honeydew', 'Huckleberry',
'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
'Kiwi fruit', 'Kumquat',
'Lemon', 'Lime', 'Loquat', 'Lychee',
'Nectarine',
'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
'Olive', 'Orange',
'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
'Quince',
'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
'Ugli fruit',
'Watermelon',
];


class AutoCompleteApi extends Component {


  constructor(props) {
    super(props);
    this.state = {
      dados: [],
      textInserted : 'a',
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
      let _url = 'https://api.github.com/search/users?q=' + value + '&order=asc&page=1&per_page=30';
      component.setState({
        textInserted : value,
        url : _url,
      });
      setTimeout(function () {


        console.log('text: ' + component.state.url);
        component.componentDidMount();

      }, 500);
    };

componentDidMount(){
  let component = this;
  axios.get(component.state.url)
  .then(function (response) {
    let _usersPaged = response.data.items;
    let  usersPaged = _usersPaged.map((dados) => dados.login);

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




  render () {
    return (
      //console.log(this.state.dados),

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
