import React, { useState } from "react"
import { ApiDelivery } from "../../../data/sources/remote/api/apiDelivery";
import { RegisterAuthUseCase } from
    "../../../domain/useCases/auth/RegisterAuth";
const RegisterViewModel = () => {
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
        const response = await RegisterAuthUseCase(values);
        console.log('Result' + JSON.stringify(response));
    }
    return {
        ...values,
        onChange,
        register
    }
}
export default RegisterViewModel;