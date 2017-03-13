import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';



getUrlData: function (hostname) {
  alert('opaaaa' + hostname);
  var component = this;

  axios.get('http://ip-api.com/json/' + hostname)
    .then(function (response) {
      console.log(response.data);
      if(response.data.status == 'success') {

        var urlData = response.data;

        component.setState({
          className: 'well',
          domain: hostname,
          success: true,
          urlData : urlData,
        });
        //component.initializeMap(sitelocationLat, sitelocationLng);
      } else {
        alert('invalido');
        console.log(this);
        component.setState({
          showError: 'showError',
          success: false,
        });
      }

    //console.log([sitelocationLat, sitelocationLng]);

  })
    .catch(function (error) {
      console.log('iiixxxiii ' + error);
    });

}


const TabelaExemplo = () => (
  <div className="tabela-exemplo-container">
    <br/>
    <br/>
    <Divider />
    <Subheader>Lista de itens encontrados</Subheader>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn>John Smith</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>2</TableRowColumn>
          <TableRowColumn>Randal White</TableRowColumn>
          <TableRowColumn>Unemployed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>Stephanie Sanders</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>Steve Brown</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default TabelaExemplo;
