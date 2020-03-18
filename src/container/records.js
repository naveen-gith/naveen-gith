import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const rows = [{
    id: "45",
    firstName: "bob",
    lastName: "bob2",
    email: "bob@bob.com",
    status: "Pending"
}, {
    id: "46",
    firstName: "bob",
    lastName: "bob2",
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
    render() {
        let { rows } = this.state;

        return (
            <React.Fragment>

                <select className='Form-Input col-sm-2  browser-default custom-select drop'

                    placeholder='Disposition'
                    onChange={(event) => this.handleChange(event)} >
                    <option value="Pending">Pending</option>
                    <option value="Verified">Verified</option>
                    <option value="Verified With Edits">Verified With Edits</option>
                    <option value="Needs Attention">Needs Attention</option>
                </select>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.firstName}</TableCell>
                                    <TableCell>{row.lastName}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        );
    }
}
export default MyTable;