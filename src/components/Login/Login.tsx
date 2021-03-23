import React from 'react'
import Form, {
    SimpleItem,
    Label,
    RequiredRule,
    PatternRule
} from 'devextreme-react/form';
import { Button } from 'devextreme-react/button';
import './Login.style.css';

const employee={
    email: '',
    password: ''
};
function Login() {
   
    return (
        <div className="login"> 
        <h2>Login</h2>
            <Form formData={employee} labelLocation="top" alignItemLabels>
                
         

                <SimpleItem dataField="email">
                    <RequiredRule
                        message="Email is required"
                    />
                    <PatternRule
                        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        message="Please enter valid email id"
                    />
                      <Label
                        alignment="left" />
                </SimpleItem>

                <SimpleItem dataField="password">
                    <RequiredRule
                        message="Password is required"
                    />
                    <PatternRule
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
                        message="Please enter valid password"
                    />
                  <Label
                        alignment="left" />
                </SimpleItem>

          
            </Form>

            <Button
            className="submitbtn"
                text="Submit"
                type='success'
                />
        </div>
    )
}

export default Login

