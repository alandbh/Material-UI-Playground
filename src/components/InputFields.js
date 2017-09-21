import React, { Component }             from 'react';
import TextField                        from 'material-ui/TextField';
import ChipInputApi                     from './ChipInputApi';
import AutoComplete                     from 'material-ui/AutoComplete';
import { CardTitle, Card, CardText }    from 'material-ui/Card';
import CallAPI from './InputFieldsContainer';

class InputFields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentPage: 1,
            rowSize: 853,
            total: 0,
            sort: '',
            order: '',
            filter: '',
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        CallAPI(this.state.currentPage, this.state.rowSize, this.state.sort,
            this.state.order, this.state.filter, (result) => {
                this.setState({
                    total: result.count,
                    data: result.data,
                });
                console.log(result.data);
                console.log(this.state.data);
            }
        );
    }

    render() {
        console.log(this.state.data)
        return (
            <div className="pesquisa-cotep-container">
                <Card className="m-b-card">
                    <CardTitle title="Input Text's" subtitle="Inputs"/>
                    <CardText>
                        <div className="row">
                            <div className="col-lg-4 col-sm-4 col-xs-12">
                                <TextField
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
                                    hintText="password"
                                    type='password'
                                    floatingLabelText="Password field"
                                    fullWidth={true}
                                />
                            </div>
                        </div>
                    </CardText>
                </Card>

                <Card>
                    <CardTitle title="Search Input's" subtitle="Inputs searching on API's"/>
                    <CardText>
                        <div className="row">
                            <div className="col-lg-4 col-sm-4 col-xs-12">
                                <AutoComplete
                                    floatingLabelText="Minas Gerais cities (Case insensitive)"
                                    filter={AutoComplete.caseInsensitiveFilter}
                                    dataSource={this.state.data}
                                    maxSearchResults={5}
                                    fullWidth={true}
                                />
                            </div>

                            <div className="col-lg-4 col-sm-4 col-xs-12">
                                <AutoComplete
                                    floatingLabelText="Minas Gerais cities (Fuzzy search)"
                                    filter={AutoComplete.fuzzyFilter}
                                    dataSource={this.state.data}
                                    maxSearchResults={5}
                                    fullWidth={true}
                                />
                            </div>

                            <div className="col-lg-4 col-sm-4 col-xs-12">
                                <ChipInputApi/>
                            </div>
                        </div>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default InputFields;
