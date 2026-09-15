import * as S from "./styles"
import InputField from "../../components/InputField"
import { useState } from "react"
import Button from "../../components/Button"

const ResetPassword = () => {

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    })

    const [errors, setErrors] = useState({
        password: false,
        confirmPassword: false,
        passwordMatch: false
    })

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))

        setErrors(prev => ({
            ...prev,
            [field]: false,
            passwordMatch: false
        }))
    }

    const handleBlur = (field) => {
        setErrors(prev => ({
            ...prev,
            [field]: !formData[field].trim()
        }))

         if (field === "confirmPassword") {
        setErrors(prev => ({
            ...prev,
            passwordMatch:
                formData.confirmPassword !== formData.password
        }))
    }
    }

    return (
        <S.ResetPage>
        <S.Title>sua nova senha</S.Title>
        <S.LoginForm action="">
            <InputField
                        field="password"
                        label="digite sua nova senha"
                        type="password"
                        placeholder="digite sua nova senha"
                        formData={formData}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        />

            <InputField
                        field="confirmPassword"
                        type="password"
                        placeholder="confirme sua senha"
                        formData={formData}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        />
            {errors.passwordMatch && (
                <span className="match-error">*as senhas não coincidem!</span>
            )}

            <Button type="button" size="md">salvar</Button>

        </S.LoginForm>
        </S.ResetPage>
    )
}

export default ResetPassword