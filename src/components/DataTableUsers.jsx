import React, { Component }   from 'react';
import { indigo600 }          from 'material-ui/styles/colors';
import getMuiTheme            from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider       from 'material-ui/styles/MuiThemeProvider';
import { Card }               from 'material-ui/Card';
import DataTables             from 'material-ui-datatables';
import CallAPI                from './DataTableUsersContainer';
import Avatar                 from 'material-ui/Avatar';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo600,
        accent1Color: indigo600,
    },
});

const TABLE_COLUMNS_SORT_STYLE = [
    {
        key: 'id',
        label: 'ID',
        sortable: false,
        style: {
            width: 5,
        },
    },
    {
        key: 'avatar_urls',
        label: '',
        style: {
            width: 5,
        },
    },
    {
        key: 'name',
        label: 'Login',
        sortable: true,
        style: {
            width: 50,
        },
    },
    {
        key: 'description',
        label: 'Descrição',
        sortable: false,
        style: {
            width: 70,
        },
    },
    {
        key: 'url',
        label: 'Site',
        sortable: false,
    }];

class DataTableUsers extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
        this.handleFilterValueChange = this.handleFilterValueChange.bind(this);
        this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
        this.handleNextPageClick = this.handleNextPageClick.bind(this);
        this.handleRowSizeChange = this.handleRowSizeChange.bind(this);
        this.formatData = this.formatData.bind(this);

        this.state = {
            data: [],
            currentPage: 1,
            rowSize: 10,
            total: 0,
            sort: '',
            order: '',
            filter: '',
        };
    }

    componentDidMount() {
        CallAPI(this.state.currentPage, this.state.rowSize, this.state.sort,
            this.state.order, this.state.filter, (result) => {
                this.setState({
                    total: result.count,
                    data: result.data,
                });
            }
        );
    }

    handleSortOrderChange(key, order) {
        CallAPI(this.state.currentPage, this.state.rowSize, key, order, this.state.filter, (result) => {
                this.setState({
                    total: result.count,
                    data: result.data,
                    sort: key,
                    order: order,
                });
            }
        );
    }

    handleFilterValueChange(value) {
        const page = 1;
        CallAPI(page, this.state.rowSize, this.state.sort, this.state.order, value, (result) => {
                this.setState({
                    total: result.count,
                    data: result.data,
                    filter: value,
                    currentPage: page,
                });
            }
        );
    }

    handlePreviousPageClick() {
        const page = this.state.currentPage - 1;
        CallAPI(page, this.state.rowSize, this.state.sort, this.state.order, this.state.filter, (result) => {
                this.setState({
                    total: result.count,
                    data: result.data,
                    currentPage: page,
                });
            }
        );
    }

    handleNextPageClick() {
        const page = this.state.currentPage + 1;
        CallAPI(page, this.state.rowSize, this.state.sort, this.state.order, this.state.filter, (result) => {
                this.setState({
                    total: result.count,
                    data: result.data,
                    currentPage: page,
                });
            }
        );
    }

    handleRowSizeChange(index, rowSize) {
        let page = this.state.currentPage;
        if ((page - 1) * rowSize > this.state.total) {
            page = 1;
        }
        CallAPI(page, rowSize, this.state.sort, this.state.order, this.state.filter, (result) => {
                this.setState({
                    total: result.count,
                    data: result.data,
                    currentPage: page,
                    rowSize: rowSize,
                });
            }
        );
    }

    formatData() {
        return this.state.data.map((item) => {
            item.avatar_urls = <Avatar size={30} src={item.avatar_urls['24']}/>
            return item
        })
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <div>
                        <Card style={{ marginTop: 20 }}>
                            <DataTables
                                title={'Users'}
                                height={'auto'}
                                selectable={true}
                                showRowHover={true}
                                columns={TABLE_COLUMNS_SORT_STYLE}
                                data={this.formatData()}
                                showCheckboxes={false}
                                showHeaderToolbar={true}
                                onCellClick={this.handleCellClick}
                                onCellDoubleClick={this.handleCellDoubleClick}
                                onFilterValueChange={this.handleFilterValueChange}
                                onNextPageClick={this.handleNextPageClick}
                                onPreviousPageClick={this.handlePreviousPageClick}
                                onSortOrderChange={this.handleSortOrderChange}
                                onRowSizeChange={this.handleRowSizeChange}
                                page={this.state.currentPage}
                                count={this.state.total}
                                rowSize={this.state.rowSize}
                                rowSizeList={[5, 10, 15]}
                            />
                        </Card>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default DataTableUsers;