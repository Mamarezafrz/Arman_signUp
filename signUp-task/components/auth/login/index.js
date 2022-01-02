import React from 'react';
import Styles from './login.module.css';
import { Grid,Paper,Avatar,TextField,FormControlLabel, Checkbox,Button,Link,Typography,createTheme,ThemeProvider } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


const LoginForm = ({setStatus}) =>{
    return(
        <Grid dir="rtl">
            <Paper className={Styles.paper} elevation={10}>
                <Grid align="center">
                    <Avatar className={Styles.avatar}><LockOutlinedIcon/></Avatar>
                    <h2>ثبت نام</h2>
                </Grid>
                <TextField className={Styles.formInp} label="نام کاربری" placeholder='نام کاربری خود را وارد کنید' fullWidth required/>
                <TextField className={Styles.formInp} label="رمزعبور" placeholder='رمز عبور خود را وارد کنید' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="chechedB"
                            color="primary"/>

                    }
                    label="مرا به خاطر بسپار" dir='ltr'/>
                    <Button className={Styles.loginBtn} type='submit' color='primary' variant='contained' fullWidth >ورود</Button>

                    <Typography>رمز عبور خود را فراموش کرده اید؟
                        <Link href="">بازیابی رمز عبور</Link>
                    </Typography>

                    <Typography>ثبت نام نکرده اید؟
                        <Link href="" onClick={()=>setStatus(false)}>ثبت نام</Link>
                    </Typography>

            </Paper>
        </Grid>
    );
}

export default LoginForm ;