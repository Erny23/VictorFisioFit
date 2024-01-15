import { useState, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import logValidation from "./Auth/logValidation"
import { AuthContext } from './Auth/authProvider'

function login() {
    const [ values, setValues ] = useState({
        email: "",
        password: ""
    });

    const [ errors, setErrors] = useState({});

    const [ invalid, setInvalid] = useState();

    const { login, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
        setErrors(logValidation(values));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(logValidation(values));
        login(values.email, values.password, (res) => {
            if(res) {
                navigate('/VictorFisioFit');
                console.log('Sesion iniciada');
            } else {
                setInvalid('Direccion o contrasena incorrecta');
                console.log('Sesion no iniciada');
            }
        })
    };

    const handleOut = (e) => {
        e.preventDefault();
        logout();
        console.log('Sesion cerrada');
    };

    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100' style={{'flexDirection': 'column'}}>
                <div>
                    <h1 style={{color:'white'}}>LogIn</h1>
                </div>
                <div className='bg-white p-3 rounded w-25'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type="email" placeholder='email' name="email" id="email" autoComplete="off" onChange={handleInput} className="form-control rounded-0" />
                            { errors.email && <span className="text-danger"> {errors.email} </span> }
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password"><strong>Contrasena</strong></label>
                            <input type="password" placeholder='Contrasena' name="password" id="password" autoComplete="new-password" onChange={handleInput} className="form-control rounded-0" />
                            { errors.password && <span className="text-danger"> {errors.password} </span> }
                            { invalid && <span className="text-danger"> {invalid} </span> }
                        </div>
                        <button type="submit" className='btn btn-success w-100'><strong>Log In</strong></button>
                    </form>
                </div>
                <div>
                    <button className="btn btn-info">
                        <Link to={'/VictorFisioFit'} style={{textDecoration:'none', color:'white'}}><strong>Home</strong></Link>
                    </button>
                    <button type="button" onClick={handleOut} className="btn btn-danger"><strong>LogOut</strong></button>
                </div>
            </div>
        </>
    )
}

export default login