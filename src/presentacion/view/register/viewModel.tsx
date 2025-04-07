import React, { useState } from "react";
import { RegisterAuthUseCase } from "../../../domain/useCases/auth/RegisterAuth";

const RegisterViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const register = async () => {
        if (isValidForm()) {
            setErrorMessage(''); // Limpiar errores previos si todo está bien
            const response = await RegisterAuthUseCase(values);
            console.log('Result: ', response);
        } else {
            console.log('Formulario no válido');
        }
    }

    const isValidForm = (): boolean => {
        if (values.name.trim() === '') {
            setErrorMessage('El nombre es requerido');
            return false;
        }
        if (values.lastname.trim() === '') {
            setErrorMessage('El apellido es requerido');
            return false;
        }
        if (values.email.trim() === '') {
            setErrorMessage('El correo es requerido');
            return false;
        }
        if (values.phone.trim() === '') {
            setErrorMessage('El teléfono es requerido');
            return false;
        }
        if (values.password.trim() === '') {
            setErrorMessage('La contraseña es requerida');
            return false;
        }
        if (values.confirmPassword.trim() === '') {
            setErrorMessage('La confirmación de contraseña es requerida');
            return false;
        }
        if (values.password !== values.confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden');
            return false;
        }

        return true;
    }

    return {
        ...values,
        onChange,
        register,
        errorMessage
    }
}

export default RegisterViewModel;