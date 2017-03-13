import React, { PropTypes, Component } from 'react';


import myTheme            from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';

import AutoCompleteApi              from './AutoCompleteApi';
import ChipInput from 'material-ui-chip-input';
import Chip from 'material-ui/Chip';


import axios from 'axios';




const fruit = [
'Apple', 'Apricot', 'Avocado',
];

const styles = {
    chip: {
      marginRight: 4,
    },
    chipWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: -16,
    },
  };


class ChipInputApi extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dados: [],
      textInserted : 'a',
      url: '',
    };
  };



  handleChange = (chips) => {

  }

  handleAddChip = (chip) => {

  }

  handleDeleteChip = (chip, index) => {

  }




  handleNewRequestPai2 = (value) => {

    let arr = this.state.dados;
    arr.splice(2, 0, value);
    let obj = Object.assign([{}], arr);
    //arr[0] = value;

    console.log('INI-pai----------');
    console.log(obj);
    console.log('FIM----------');

    this.setState({
      dados : obj,
    })

  };


  componentDidMount(){
    let component = this;
  }


  handleRequestDelete = (key) => {
    this.dados = this.state.dados;
    const chipToDelete = this.dados.map((chip) => chip.key).indexOf(key);
    this.dados.splice(chipToDelete, 1);
    this.setState({dados: this.dados});
  }

  renderChip(data, index) {
      return (
        <Chip
          style={styles.chip}
          key={index}
          onRequestDelete={() => this.handleRequestDelete(index)}
        >
          {data}
        </Chip>
      );
    }


  render () {
    return (

      <div className="chipinputapi-container">
        <AutoCompleteApi
          perPage="30"
          fullWidth={true}
          handleNewRequestPai={this.handleNewRequestPai2}
          />

        <div style={styles.chipWrapper}>
          {this.state.dados.map(this.renderChip, this, this.index)}
        </div>
      { /*
      <ChipInput
        value={this.state.dados}
        onChange={this.handleUpdateInput}
        onRequestAdd={(chip)            => this.handleAddChip(chip)}
        onRequestDelete={(chip, index)  => this.handleDeleteChip(chip, index)}
        fullWidth={true}
      />
      */}
        <pre>
            {this.state.dados}
        </pre>
      </div>
    )
  }
}

export default ChipInputApi;
