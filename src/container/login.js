import React from 'react';
import './login.css'
import PageTitle from '../components/pageTitle';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                email: '',
                password: ''
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        console.log(event.target);
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
        console.log(this.state);
    }

    render() {
        const loginForm = <React.Fragment>
            <input
                className='Form-Input'
                type='text'
                name='email'
                placeholder='Email'
                value={this.state.login.email}
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
