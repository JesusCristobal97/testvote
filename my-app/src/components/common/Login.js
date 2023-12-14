import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { loginUserSystem } from "../../actions/UserAction";
import { useNavigate } from 'react-router-dom';
import { Button,Grid ,TextField,Checkbox , Link, Container,Box,Typography,FormControlLabel} from '@mui/material' 
import style from "../styles/Login";


const Login = () => {
    const navigate = useNavigate();
    const [user, setUsername] = useState({
        Login : "",
        Password : ""
    }); 
    const { login } = useContext(AuthContext);
 
    const writeUserModel = (e)=>{
        const { name,value} = e.target;
        setUsername(last => ({
            ...last,
            [name] : value
        }))
    }

   

    const handleSubmit = (e) => {
        e.preventDefault();
      
        try {

            loginUserSystem(user).then(response => { 
                console.log(response.data.body);
                login(response.data.body);
                if (response.data.body.typeUser === 1) {
                    navigate('/admin'); // Asegúrate de tener esta ruta configurada en tu Router
                } else if (response.data.body.typeUser === 2) {
                    navigate('/user'); // Asegúrate de tener esta ruta configurada en tu Router
                }
            });
            
        } catch (error) {
            console.error('Error al iniciar sesión', error);
        }
 
    };

    return (
        <Container component="main" maxWidth={false} style={{ backgroundColor: "", width: "100"}}>
            <Grid container spacing={2 }>
                 <Grid item xs={12} md={4}  style={{ backgroundColor:"#56c111",display: "flex", height: "100vh" }}>
                    <Box height={"100%"}> </Box> 
                </Grid>
                <Grid item xs={12} md={8} style={style.grid}  justify="flex-end">
                    <div style={{ marginTop : "25%", marginLeft:"10%", marginRight : "20%"}}>
                    <Typography component="h1" variant="h4">
                                MiVoto
                            </Typography> 
                            <label style={{ fontSize: 18 }}>Bienvenido de nuevo</label>
                            <label style={{ fontSize: 18 }}> Inicie sesión en su cuenta </label>
                            <label style={{ fontSize: 18 }}> ¿Sin cuenta? </label>
                                     <Link href="/register" style={{ fontSize: 18,marginLeft : 5 }}>
                                     Regístrate ahora
                                    </Link>
                            <form>
                            <Grid container spacing={2}  justify="flex-end">
                                        <Grid item xs={12} md={6}>
                                            <TextField name="Login"  value={user.Login} 
                                            variant="outlined" fullWidth label="Ingrese su nombre" onChange={writeUserModel} margin="normal" /> 
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                             <TextField name="Password"  value={user.Password} 
                                             type="password" variant="outlined" fullWidth label="Ingrese su contraseña" onChange={writeUserModel} margin="normal" />
                                        </Grid>
                            </Grid>
                            <Grid>
                                <FormControlLabel
                                        value="end"
                                        control={<Checkbox color="primary" />}
                                        label="Seguir conectado" 
                                        />
                            </Grid>
                            <Grid container spacing={2}  justifyContent="flex-end">
                                    <Grid item xs={6} md={3} >
                                        <Button type="submit" onClick={handleSubmit} fullWidth variant="contained" size="large" style={style.submit}>
                                            Ingresar </Button>
                                    </Grid>
                                    <Grid item xs={6} md={4} >
                                        <Button type="submit"  fullWidth variant="contained"  size="large" style={style.submit}>
                                                Olvide mi contraseña </Button>
                                        </Grid>

                  
                            </Grid>
                            </form> 
                    </div>
                </Grid>
            </Grid>
        </Container>
          
    );
};

export default Login;