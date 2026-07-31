import { Link } from "react-router-dom"

import InputField from "../InputField"
import Button from "../Button"
import * as S from "./styles"
import { useState } from "react"

const LoginMenu = ({ loginRef }) => {
    const [formData, setFormData] = useState({
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
        cpf: "",
        fullName: "",
        phone: "",
        birthDate: ""
    })

    const [errors, setErrors] = useState({
        email: false,
        confirmEmail: false,
        password: false,
        confirmPassword: false,
        cpf: false,
        fullName: false,
        phone: false,
        birthDate: false,

        emailMatch: false,
        passwordMatch: false,
    })

    const [mode, setMode] = useState("login")

    const handleNext = () => {
        const stepFields = {
            "register-step-1": ["cpf", "fullName", "phone"],
            "register-step-2": ["email", "confirmEmail", "birthDate"],
            "register-step-3": ["password", "confirmPassword"],
        }

        const nextStep = {
            "register-step-1": "register-step-2",
            "register-step-2": "register-step-3",
            "register-step-3": null,
        }

        const fields = stepFields[mode]

        // 1. Verifica se todos os campos obrigatórios foram preenchidos
        if (!validateFields(fields)) {
            return
        }

        // 2. Verifica se os e-mails são iguais
        if (
            mode === "register-step-2" &&
            formData.email !== formData.confirmEmail
        ) {
            setErrors(prev => ({
                ...prev,
                emailMatch: true
            }))

            return
        }

        // 3. Verifica se as senhas são iguais
        if (
            mode === "register-step-3" &&
            formData.password !== formData.confirmPassword
        ) {
            setErrors(prev => ({
                ...prev,
                passwordMatch: true
            }))

            return
        }

        // 4. Avança para a próxima etapa
        if (nextStep[mode]) {
            setMode(nextStep[mode])
        } else {
            console.log(formData)
            // Aqui futuramente você fará a requisição para a API
        }
    }

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))

        setErrors(prev => ({
            ...prev,
            [field]: false,

            ...(field === "email" || field === "confirmEmail"
                ? { emailMatch: false }
                : {}),

            ...(field === "password" || field === "confirmPassword"
                ? { passwordMatch: false }
                : {})
        }))
    }

    const handleBlur = (field) => {

        setErrors(prev => ({
            ...prev,
            [field]: !formData[field].trim()
        }))
    }

    const validateFields = (fields) => {
        const newErrors = {}
        let isValid = true

        fields.forEach(field => {
            const hasError = !formData[field].trim()

            newErrors[field] = hasError

            if (hasError) {
                isValid = false
            }
        })

        setErrors(prev => ({
            ...prev,
            ...newErrors
        }))

        return isValid
    }

    return (
        <S.Overlay>
            <S.LoginModal ref={loginRef}>
                {mode === "login" && (
                    <>
                        <h1>Login</h1>

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

                            <InputField
                                field="password"
                                type="password"
                                placeholder="Digite sua senha"
                                formData={formData}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />
                            <S.ForgotPassword to="#">esqueci minha senha</S.ForgotPassword>
                            <Button type="button" size="md">entrar</Button>
                            <p>não tem cadastro?</p>
                            <Button size="md" variant="secondary" onClick={() => setMode("register-step-1")}>criar conta</Button>


                        </S.LoginForm>
                    </>
                )}
                {mode === "register-step-1" && (
                    <>
                        <h1>crie seu cadastro</h1>

                        <S.LoginForm>
                            <InputField
                                field="cpf"
                                label="Digite seu cpf"
                                placeholder="Digite seu cpf"
                                formData={formData}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />

                            <InputField
                                field="fullName"
                                placeholder="Digite seu nome completo"
                                formData={formData}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />

                            <InputField
                                field="phone"
                                placeholder="Digite seu celular"
                                formData={formData}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />
                            <Button size="md" type="button" onClick={handleNext}>continuar</Button>
                        </S.LoginForm>
                    </>
                )}

                {mode === "register-step-2" && (

                    <>
                        <h1>crie seu cadastro</h1>
                        <S.LoginForm>
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

                            <InputField
                                field="confirmEmail"
                                type="email"
                                placeholder="Confirme seu email"
                                formData={formData}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />

                            {errors.emailMatch && (
                                <span className="match-error">*os emails não coincidem</span>
                            )}

                            <InputField
                                field="birthDate"
                                type="date"
                                formData={formData}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />
                            <S.ButtonsDiv>
                                <Button type="button" variant="secondary" size="md" onClick={() => setMode("register-step-1")}>voltar</Button>
                                <Button type="button" size="md" onClick={handleNext}>continuar</Button>
                            </S.ButtonsDiv>
                        </S.LoginForm>
                    </>

                )}
                {mode === "register-step-3" && (

                    <>
                        <h1>crie seu cadastro</h1>
                        <p>agora defina sua senha de acesso</p>
                        <S.LoginForm>
                            <InputField
                                field="password"
                                type="password"
                                placeholder="Digite sua senha"
                                formData={formData}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />

                            <InputField
                                field="confirmPassword"
                                type="password"
                                placeholder="Confirme sua senha"
                                formData={formData}
                                errors={errors}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />

                            {errors.passwordMatch && (
                                <span className="match-error">*as senhas não coincidem</span>
                            )}

                            <S.ButtonsDiv>
                                <Button type="button" variant="secondary" size="md" onClick={() => setMode("register-step-2")}>voltar</Button>
                                <Button type="button" size="md" onClick={handleNext}>finalizar</Button>
                            </S.ButtonsDiv>
                        </S.LoginForm>
                    </>
                )}
            </S.LoginModal>
        </S.Overlay>
    )
}

export default LoginMenu