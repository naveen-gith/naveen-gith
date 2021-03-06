import React, { Component } from 'react';
import './Excel.css'
import XLSX from 'xlsx';

/* generate an array of column objects */



export const make_cols = refstr => {
  let o = [], C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i }
  return o;
};
class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: []
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setkeyvalue=this.setkeyvalue.bind(this);
  }

  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  };

  handleFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];;
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      console.log(ws);
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
        console.log(JSON.stringify(this.state.data, null, 2));
        var i;





     
        this.setkeyvalue('middleName', 'Middle Name');
        this.setkeyvalue('lastName', 'Last Name');
        this.setkeyvalue('profDesignation', 'Prof Designation');
        this.setkeyvalue('firstName', 'First Name');

        for (i = 0; i < this.state.data.length; i++) {
          this.state.data[i]['status'] = 'Pending';


        }


        console.log(this.state.data);

        var token = localStorage.getItem('token')
        fetch('http://localhost:4000/users/create', {
          method: 'POST',
          body: JSON.stringify(this.state.data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        }).then(response => {

          var statusCode = response.status;
          if (statusCode == 401) {
            return
          } else {

            return response.json();
          }

        }).then((parsedJSON) => {
          console.log(parsedJSON)

          this.props.history.push('/home');
        });
      });

    };

    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    };
  }

   setkeyvalue=(key, value)=> {
    let i;
    for (i = 0; i < this.state.data.length; i++) {
      this.state.data[i][key] = this.state.data[i][value];
      delete this.state.data[i][value];

    }
  }
  render() {
    return (
      <div className="background">
        <div className="white-background">
          <h3 className="header">Upload files</h3>
          <div className="upload-btn-wrapper">
            <br />
            <label htmlFor="file">Browse & select the  file for upload</label>
            <input className="btnFile" type="file" id="file" onChange={this.handleChange} />
          </div>
          <br />
          <button type='submit'

            onClick={this.handleFile}>Submit</button>
        </div>
      </div>

    )
  }
}

export default ExcelReader;