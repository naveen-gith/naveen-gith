import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import { setSelectedData } from '../redux/actions/selectedData'
import './records.css';

const rows = [{
    id: "45",
    firstName: "bob",
    lastName: "bob2",
    profDesignation: "DDS",
    email: "bob@bob.com",
    gender: 'M',
    status: "Pending"
}, {
    id: "46",
    firstName: "bob",
    lastName: "bob2",
    profDesignation: "DMD",
    gender: 'F',
    email: "bob@bob.com",
    status: "Verified"
},
]



class MyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: rows
        }
        this.handleChange = this.handleChange.bind(this);
        this.handletextChange = this.handletextChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    handletextChange(event) {
        const myItems = this.state.rows;
        const { name, value } = event.target;
        console.log(value);
        this.setState({
            rows: rows.filter((ele) => {

                return ele.firstName + ele.lastName == value;
            })
        });

    }

    handleChange(event) {
        const myItems = this.state.rows;
        console.log(event.target);
        const { name, value } = event.target;
        console.log(value);


        this.setState({
            rows: rows.filter((ele) => {
                return ele.status == value;
            })
        });


    }

  onSubmit = (data) => {
    this.props.setSelectedData(data)
this.props.history.push('/edit');

    
 }
    render() {
        let { rows } = this.state;

        return (
            <React.Fragment>
                <div className="record">
                    <div className="col-sm-12 block">
                        <div className="col-sm-6 title">
                            <h3>Record List</h3>
                        </div>
                        <input
                            className='Form-Input'
                            type='text'

                            placeholder='search By Name'

                            onChange={(event) => this.handletextChange(event)} />
                        <select className='Form-Input col-sm-2  browser-default custom-select drop'

                            placeholder='Disposition'
                            onChange={(event) => this.handleChange(event)} >
                            <option value="Pending">Pending</option>
                            <option value="Verified">Verified</option>
                            <option value="Verified With Edits">Verified With Edits</option>
                            <option value="Needs Attention">Needs Attention</option>
                        </select>
                    </div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell> Name</TableCell>
                                    <TableCell> Prof Designation</TableCell>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.firstName + row.lastName}</TableCell>
                                        <TableCell>{row.profDesignation}</TableCell>
                                        <TableCell>{row.gender}</TableCell>

                                        <TableCell > <p className={(row.status == 'Pending') ? 'pending' : 'normal'}>{row.status}</p></TableCell>
                                        <TableCell><button className="btn"  onClick={()=>this.onSubmit(row)}>Edit</button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {}
const mapDispatchToProps = dispatch => {
    return {setSelectedData : (data) => dispatch(setSelectedData(data)) }
} 
export default connect(null, mapDispatchToProps)(MyTable);