import React from 'react';
import { Grid,Paper,Avatar,TextField,FormControlLabel, Checkbox,Button,Link,Typography,createTheme,ThemeProvider } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Styles from './register.module.css';
import { SendToMobile } from '@mui/icons-material';



const RegisterForm = ({setStatus}) => {


    return(
        <Grid dir="rtl">
            <Paper className={Styles.paper} elevation={10}>
                <Grid align="center">
                    <Avatar className={Styles.avatar}><AddCircleOutlineOutlinedIcon/></Avatar>
                    <h2>ثبت نام</h2>
                    <Typography variant="caption">برای ثبت نام فرم را تکمیل کنید</Typography>
                </Grid>
                <form>
                    <TextField className={Styles.formInp} fullWidth label="نام" placeholder="نام خود را وارد کنید" name="name"/>
 
                    <TextField className={Styles.formInp} fullWidth label="نام خانوادگی" placeholder="نام خانوادگی خود را وارد کنید" name="family"/>
 
                    <TextField className={Styles.formInp} fullWidth label="ایمیل" placeholder="ایمیل خود را وارد کنید" name="email"/>

                    <TextField className={Styles.formInp} fullWidth label="کد ملی" placeholder="کد ملی خود را وارد کنید" name="national_code"/>

                    <TextField className={Styles.formInp} fullWidth label="شماره موبایل" placeholder="شماره موبایل خود را وارد کنید" name="mobile"s/>

                    <TextField className={Styles.formInp} fullWidth label="کلمه عبور" placeholder="پسورد خود را وارد کنید" name="password" type="password"/>

                    <TextField className={Styles.formInp} fullWidth label="تایید کلمه عبور" placeholder="تایید پسورد خود را وارد کنید" name="confirmed" type="password"/>

                    <TextField className={Styles.formInp} fullWidth label="کد معرف" placeholder="کد معرف خود را وارد کنید" name="reagent_code"/>

                    <TextField className={Styles.formInp} fullWidth label="کد شعبه" placeholder="کد شعبه خود را وارد کنید" name="branch"/>

                    <FormControlLabel dir='ltr'
                        control={
                        <Checkbox name="Checked" />
                        }
                        label="با قوانین موافق هستم"
                        />
                        <br/>
                    <Button type='submit' variant='contained' color='primary'>ثبت نام</Button>
                    <Button type='link' onClick={()=>setStatus(true)} > ورود </Button>
                </form>
            </Paper>
        </Grid>
    );
}


export default RegisterForm;