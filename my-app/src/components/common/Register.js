import { Container, Grid, TextField, Typography,Select, MenuItem,FormControl
    ,FormControlLabel,Link,Button,InputLabel,Checkbox} from "@mui/material";
import React from "react";
import style from "../styles/Register";

const Register = () => { 
    return(
        <Container component={"main"} maxWidth={false} style={{ backgroundColor: "", width: "100" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md= {8} style={style.grid} justifyContent={"flex-end"}>
                    <form style={{ width:"100%",marginTop : "15%",marginRight:"10%" }}>
                        <Typography component="h5" variant="h5">
                            Bienvenido,
                        </Typography>
                        <Typography component="h6" variant="h6">
                            Solo toma unos segundos crear su cuenta
                        </Typography>
                        <br />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth variant="outlined" label="Ingrese su nombre" />
                            </Grid> 
                            <Grid item xs={12} md={6}>
                                    <TextField name="lastname"   
                                    variant="outlined" 
                                    fullWidth label="Ingrese sus apellidos" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>Tipo de Documento</InputLabel>
                                        <Select
                                            name="typedocument"
                                            label="Tipo de Documento"
                                            fullWidth
                                        >
                                            <MenuItem value="0">
                                                <em>Seleccione</em>
                                            </MenuItem>
                                            <MenuItem value={"NIF"}>NIF</MenuItem>
                                            <MenuItem value={"CIF"}>CIF</MenuItem>
                                            <MenuItem value={"NIE"}>NIE</MenuItem>
                                        </Select>
                                    </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                    <TextField name="dni" variant="outlined" fullWidth label="Ingrese su numero de documento" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField name="email" variant="outlined" fullWidth label="Ingrese su correo electrónico" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField name="login" variant="outlined" fullWidth label="Ingrese un nombre de usuario" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField  name="password" type="password" variant="outlined" fullWidth label="Ingrese su contraseña" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField name="confirmpassword" type="password" variant="outlined" fullWidth label="Confirme su contraseña" />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <FormControlLabel 
                                            control={<Checkbox color="primary" />}  
                                            />
                                    <label style={{ fontSize: 18 }}>
                                        Aceptar nuestros
                                    </label>
                                    <Link href="#" style={{ fontSize: 18,marginLeft : 5 }}>
                                        términos y condiciones
                                    </Link>
                                </Grid>
                                <Grid item xs={12} md={10}>
                                        <label style={{ fontSize: 18 }}>
                                            ¿Ya tienes una cuenta? 
                                        </label>
                                        <Link href="/login" style={{ fontSize: 18,marginLeft : 5 }}>
                                                Ingresar
                                        </Link>
                                </Grid>
    
                                <Grid item xs={12} md={2} >
                                    <Button type="submit"   variant="contained" size="large" style={style.submit}>
                                            Crear cuenta
                                    </Button>
                                </Grid>
                        </Grid>
                    </form>
            </Grid>
            <Grid item xs={12} md={4}  style={{ backgroundColor:"#56c111",display: "flex", height: "100vh" }}></Grid>
           </Grid>
        </Container>
)}

export default Register;