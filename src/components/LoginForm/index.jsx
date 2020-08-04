import React, {Component} from 'react'
import styles from './LoginForm.module.css'
import sendIcon from './email-send-outline.svg'

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userEmail: '',
            userPassword: '',
            isPassValid: null,
        }
    }

    handleEmailChange = ({ target: {value}}) => {
        this.setState({
            userEmail: value,
        })
    }

    handlePasswordChange = ({ target: {value}}) => {
        this.setState({
            userPassword: value,
        })
    }


    render() {
        const {userEmail, userPassword} = this.state

        return(
            <form className={styles.form}>
                <input value={userEmail} 
                type='email' 
                name='user-email'
                onChange={this.handleEmailChange}
                />
                <input value={userPassword} 
                type='password' 
                name='user-password'
                onChange={this.handlePasswordChange}
                />
                <button><img src={sendIcon}></img></button>
            </form>
        )
    }
}

export default LoginForm