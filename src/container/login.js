import React from 'react';
import './login.css'
import PageTitle from '../components/pageTitle';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                userName: '',
                password: ''
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
   
        const { name, value } = event.target;
        const { login } = this.state;

        this.setState({
            login: {
                ...login,
                [name]: value
            }
        });
    }
    handleSubmit() {
        let statusCode;
        console.log(this.state.login);
        fetch('http://localhost:4000/users/signIn', {
            method: 'POST',
            body: JSON.stringify(this.state.login),
            headers: {
              'Content-Type': 'application/json'
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
              localStorage.setItem('token', parsedJSON.token);
              this.props.history.push('/home');
          });
        }
    
    

    render() {
        const loginForm = <React.Fragment>
            <input
                className='Form-Input'
                type='text'
                name='userName'
                placeholder='Email'
                value={this.state.login.userName}
                onChange={(event) => this.handleChange(event)} />

            <input
                className='Form-Input'
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.login.password}
                onChange={(event) => this.handleChange(event)} />

            <button
                onClick={this.handleSubmit}>LOGIN</button>

            <div>

            </div>
        </React.Fragment>;

        return <React.Fragment> 
            <PageTitle title="Doctor Verification" />
            <div className='LoginForm'>
            {loginForm}
        </div>
        </React.Fragment>
    }

}
export default Login;
