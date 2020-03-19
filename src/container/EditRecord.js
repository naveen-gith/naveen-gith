import React, { Component } from 'react';
import './EditRecord.css';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux'
class EditRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: {
                firstName: '',
                middleName: '',
                lastName: '',
                profDesignation: '',
                language1: '',
                language2: '',
                Gender: '',
                speciality: '',
                Notes: '',  
                status: '',
                disposition: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
            record:this.props.selectedData
        })
    }

    onSubmit(){
        var token=localStorage.getItem('token')
       console.log( this.state.record);
       fetch('http://localhost:4000/users/update', {
  method: 'PATCH',
  body: JSON.stringify(this.state.record),
  headers: {
    'Content-Type': 'application/json',
    'Authorization':token
  }
}).then(response => {
    
var  statusCode = response.status;
  if (statusCode == 401) {
    return 
  }else{

      return response.json();
  }

}).then((parsedJSON) => {
    console.log(parsedJSON)
  
    this.props.history.push('/home');
});
   

    }
    handleChange(event) {
        console.log(event.target);
        const { name, value } = event.target;
        const { record } = this.state;

        this.setState({
            record: {
                ...record,
                [name]: value
            }
        });
    }
    formBox(name, placeholder, value) {
        return <React.Fragment>

            <input
                className='Form-Input'
                type='text'
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(event) => this.handleChange(event)} />
        </React.Fragment>
    }
    dropdwon(name, placeholder, value) {
        return <React.Fragment>
            
            <select className='Form-Input browser-default custom-select col-sm-4 drop'
                value={this.state.selectValue}
                placeholder={placeholder}
                name='Gender'
                onChange={this.handleChange} >
                <option value="M">Male</option>
                <option value="F">Female</option>

            </select>
        </React.Fragment>
    }

    render() {

        const recordform = <React.Fragment>
              <div className="background">
            <div >
                {this.formBox('firstName', 'First Name', this.state.record.firstName)}
                {this.formBox('middleName', 'Middle Name', this.state.record.middleName)}
                {this.formBox('lastName', 'Last Name', this.state.record.lastName)}
                {this.formBox('profDesignation', 'Prof Designation', this.state.record.profDesignation)}
                {this.formBox('language1', 'Language 1', this.state.record.language1)}
                {this.formBox('language2', 'Language 2', this.state.record.language2)}
                <div className="col-sm-12 as">
                    {this.dropdwon('Gender', 'Gender', this.state.record.Gender)}
                    {this.formBox('speciality', 'Speciality', this.state.record.speciality)}
                </div>
                <Divider></Divider>
                <div className="col-sm-12 block">

                    <textarea
                        className='Form-Input col-sm-6 notes'
                        type='text'
                        name='notes'
                        placeholder='Notes'
                        value={this.state.record.notes}
                        onChange={(event) => this.handleChange(event)} />

                    <select className='Form-Input col-sm-2 browser-default custom-select drop'
                        value={this.state.selectValue}
                        name='status'
                        placeholder='Status'
                       
                        onChange={this.handleChange} >
                        <option value="Verified">Verified</option>
                        <option value="Verified With Edits">Verified With Edits</option>
                        <option value="Needs Attention">Needs Attention</option>


                    </select>
                    <select className='Form-Input col-sm-2  browser-default custom-select drop'
                        value={this.state.selectValue}
                        placeholder='Disposition'
                        name='disposition'
                        onChange={this.handleChange} >
                        <option value="Verified">Verified</option>
                        <option value="Verified With Edits">Verified With Edits</option>
                        <option value="Name Change">Name Change</option>
                        <option value="Speciality Change">Speciality Change</option>

                    </select>
                </div>
            </div>
            <div className="submit">
            <button  onClick={()=>this.onSubmit()}>Submit</button>
            </div>
            </div>
        </React.Fragment>

        return recordform;
    }
}
const mapStateToProps = (state) => ({
    selectedData: state.selectedData.data
})
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(EditRecord);