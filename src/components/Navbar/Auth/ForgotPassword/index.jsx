import { useState } from "react"

import InputField from "../../../InputField"
import Button from "../../../Button"


import * as S from "../../styles"

const ForgotPassword = ({ onBack }) => {

    const [formData, setFormData] = useState({
        email: ""
    })

    const [errors, setErrors] = useState({
        email: false
    })

    const handleChange = (field, value) => {

        setFormData(prev => ({
            ...prev,
            [field]: value
        }))

        setErrors(prev => ({
            ...prev,
            [field]: false
        }))
    }

    const handleBlur = (field) => {

        setErrors(prev => ({
            ...prev,
            [field]: !formData[field].trim()
        }))
    }

    const handleSubmit = () => {

        if (!formData.email.trim()) {

            setErrors(prev => ({
                ...prev,
                email: true
            }))

            return
        }

        console.log("Enviar recuperação para:", formData.email)

        // futuramente post api/password-reset/
    }

    return (
                <>
                    <h1>esqueceu a senha?</h1>

                    <S.LoginForm action="">
                        <InputField
                        field="email"
                        label="Digite seu email"
                        type="email"
                        placeholder="Digite seu email"
                        formData={formData}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        />

                        <S.SpanLink className="sSpanLinkan-link">um link para redefinir a sua senha <br/> será enviado para seu email</S.SpanLink>

                        <Button type="button" 
                        size="md" 
                        onClick={handleSubmit}>enviar</Button>
                    </S.LoginForm>
                </>
    )
}

export default ForgotPassword