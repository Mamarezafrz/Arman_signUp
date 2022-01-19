import React, { useEffect, useState } from 'react';
import { Grid,Paper,Avatar,TextField,FormControlLabel, Checkbox,Button,Typography,createTheme,ThemeProvider} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Styles from './register.module.css';
import { ValidatorComponent,ValidatorForm, TextValidator} from 'react-material-ui-form-validator';








class RegisterForm extends React.Component{




    state = {
        user:{            
            name:'',
            family:'',
            email:'',
            national_code:'',
            mobile:'',
            password:'',
            confirmed:'',
            reagent_code:'',
            branch:''}
    }
    
    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
        
    }
    handleSubmit = (values) => {
        
        console.log(this.state.user);
    }

    componentDidMount() {
        
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.user.password) {
                return false;
            }
            return true;
        });
    }



    componentWillUnmount() {
        ValidatorForm.removeValidationRule('isPasswordMatch');
    }


    render(){
        const { user } = this.state;
        return(
            
            <Grid dir="rtl">
                <Paper className={Styles.paper} elevation={10}>
                    <Grid align="center">
                        <Avatar className={Styles.avatar}><AddCircleOutlineOutlinedIcon/></Avatar>
                        <h2>ثبت نام</h2>
                        <Typography variant="caption">برای ثبت نام فرم را تکمیل کنید</Typography>
                    </Grid>
                        
                        
                        <ValidatorForm
                        
                            ref="form"
                            onSubmit={(values)=> this.handleSubmit(values)}
                            onError={errors => console.log(errors)}
                            
                        >
                
                                
                            <TextValidator
                                className={Styles.formInp}                          
                                fullWidth 
                                label="نام" 
                                placeholder="نام خود را وارد کنید"
                                name="name" 
                                onChange={this.handleChange}
                                value={user.name}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                
                                />
        
                            <TextValidator
                                className={Styles.formInp}                          
                                fullWidth 
                                label="نام خانوادگی" 
                                placeholder="نام خانوادگی خود را وارد کنید"
                                name="family" 
                                onChange={this.handleChange}
                                value={user.family}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                />                                                          
        
                                <TextValidator
                                    className={Styles.formInp} 
                                    fullWidth
                                    label="ایمیل" 
                                    placeholder="ایمیل خود را وارد کنید" 
                                    name="email"
                                    onChange={this.handleChange}
                                    name="email"
                                    value={user.email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email is not valid']}
                                />

                            <TextValidator
                                className={Styles.formInp}                          
                                fullWidth 
                                label="کد ملی" 
                                placeholder="کد ملی خود را وارد کنید"
                                name="national_code" 
                                onChange={this.handleChange}
                                value={user.national_code}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                />    

                            <TextValidator
                                className={Styles.formInp}                          
                                fullWidth 
                                label="شماره موبایل" 
                                placeholder="شماره موبایل خود را وارد کنید"
                                name="mobile" 
                                onChange={this.handleChange}
                                value={user.mobile}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                />    

                            <TextValidator
                                className={Styles.formInp}                          
                                fullWidth 
                                label="کلمه عبور" 
                                placeholder="کلمه عبور خود را وارد کنید"
                                name="password" 
                                onChange={this.handleChange}
                                value={user.password}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                />    

                            <TextValidator
                                className={Styles.formInp}                          
                                fullWidth 
                                label="تکرار کلمه عبور" 
                                placeholder="تکرار کلمه عبور را وارد کنید"
                                name="confirmed" 
                                onChange={this.handleChange}
                                value={user.confirmed}
                                validators={['required','isPasswordMatch']}
                                errorMessages={['this field is required','password mismatch']}
                                />
                            <TextValidator
                                className={Styles.formInp}                          
                                fullWidth 
                                label="کد معرف" 
                                placeholder="کد معرف خود را وارد کنید"
                                name="reagent_code" 
                                />
                            <TextValidator
                                className={Styles.formInp}                          
                                fullWidth 
                                label="کد شعبه" 
                                placeholder="کد شعبه خود را وارد کنید"
                                name="branch" 
                                />    


                            <FormControlLabel dir='ltr'
                                control={
                                <Checkbox name="Checked" />
                                }
                                label="با قوانین موافق هستم"
                                />
                                <br/>
                            <Button type='submit' variant='contained' color='primary'>ثبت نام</Button>
                            <Button type='link' onClick={()=>this.props.setStatus('login')} > ورود </Button>
                            

                        </ValidatorForm>    
                </Paper>

            </Grid>
        );
      }
}


export default RegisterForm;