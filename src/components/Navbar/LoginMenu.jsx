import { Link } from "react-router-dom"

import Button from "../Button"
import * as S from "./styles"
import { useState } from "react"

const LoginMenu = ({ loginRef }) => {
    const [formData, setFormData] = useState({
        email: "",
        confirmEmail: "",
        password: "",
        cpf: "",
        fullName: "",
        phone: "",
        birthDate: ""
    })

    const [errors, setErrors] = useState({
        email: false,
        confirmEmail: false,
        password: false,
        cpf: false,
        fullName: false,
        phone: false,
        birthDate: false
    })

    const [mode, setMode] = useState("login")

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleBlur = (field) => {
        if (!formData[field].trim()) {
            setErrors(prev => ({
                ...prev,
                [field]: true
            }))
        }
    }

    return (
        <S.Overlay>
            <S.LoginModal ref={loginRef}>
            {mode === "login" && (
                <>
                <h1>Login</h1>

            <S.LoginForm action="">
                <S.InputGroup>
                    <label className={errors.email ? "error" : ""}>digite seu email</label>
                    <input 
                        value={formData.email}
                        className={errors.email ? "error" : ""}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        required type="email" />
                {errors.email && (
                    <span className="error-message">*ei faltou preencher esse campo!</span>
                )}
                </S.InputGroup>
                <S.InputGroup>
                <input 
                    value={formData.password}
                    className={errors.password ? "error" : ""}
                    onChange={(e) => handleChange("password", e.target.value)}
                    onBlur={() => handleBlur("password")}
                required type="password" 
                placeholder="digite sua senha*" />
                {errors.password && (
                    <span className="error-message">*ei faltou preencher esse campo!</span>
                )}
                </S.InputGroup>
                <S.ForgotPassword to="#">esqueci minha senha</S.ForgotPassword>
                <Button size="md">entrar</Button>
                <p>não tem cadastro?</p>
                <Button size="md" variant="secondary" onClick={() => setMode("register-step-1")}>criar conta</Button>
                
            
            </S.LoginForm>
            </>
            )}
            {mode === "register-step-1" && (
                    <>
                    <h1>crie seu cadastro</h1>
                    
                    <S.LoginForm>
                        <S.InputGroup>
                        <label className={errors.cpf ? "error" : ""}>digite seu cpf</label>
                    <input 
                        value={formData.cpf}
                        className={errors.cpf ? "error" : ""}
                        onChange={(e) => handleChange("cpf", e.target.value)}
                        onBlur={() => handleBlur("cpf")}
                        required type="number" 
                        placeholder="digite seu cpf*" />
                {errors.cpf && (
                    <span className="error-message">*ei faltou preencher esse campo!</span>
                )}
                </S.InputGroup>

                    <S.InputGroup>
                    <input value={formData.fullName}
                    className={errors.fullName ? "error" : ""}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    onBlur={() => handleBlur("fullName")}
                    placeholder="digite seu nome completo" required type="text" />
                    {errors.fullName && (
                    <span className="error-message">*ei faltou preencher esse campo!</span>
                )}
                    </S.InputGroup>
                    <S.InputGroup>
                    <input value={formData.phone}
                    className={errors.phone ? "error" : ""}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    placeholder="digite seu celular" type="number" />
                    {errors.phone && (
                    <span className="error-message">*ei faltou preencher esse campo!</span>
                )}
                    </S.InputGroup>
                    <Button size="md" onClick={() => setMode("register-step-2")}>continuar</Button>
                    </S.LoginForm>
                    </>
                )}

                {mode === "register-step-2" && (
                    
                    <>
                    <h1>crie seu cadastro</h1>
                    <S.LoginForm>
                    <S.InputGroup>
                    <input value={formData.email}
                    className={errors.email ? "error" : ""}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="digite seu melhor email" type="email" />
                    {errors.email && (
                    <span className="error-message">*ei faltou preencher esse campo!</span>
                )}
                    </S.InputGroup>

                    <S.InputGroup>
                    <input value={formData.confirmEmail}
                    className={errors.confirmEmail ? "error" : ""}
                    onChange={(e) => handleChange("confirmEmail", e.target.value)}
                    onBlur={() => handleBlur("confirmEmail")}
                    placeholder="confirme seu email" type="email" />
                    {errors.confirmEmail && (
                    <span className="error-message">*ei faltou preencher esse campo!</span>
                )}
                    </S.InputGroup>

                    <S.InputGroup>
                    <input value={formData.birthDate}
                    className={errors.birthDate ? "error" : ""}
                    onChange={(e) => handleChange("birthDate", e.target.value)}
                    onBlur={() => handleBlur("birthDate")}
                    placeholder="quando você nasceu?" type="number" />
                    {errors.birthDate && (
                    <span className="error-message">*ei faltou preencher esse campo!</span>
                )}
                    </S.InputGroup>
                        <S.ButtonsDiv>
                            <Button variant="secondary" size="md" onClick={() => setMode("register-step-1")}>voltar</Button>
                            <Button size="md" onClick={() => setMode("register-step-3")}>continuar</Button>
                        </S.ButtonsDiv>
                    </S.LoginForm>
                    </>

                )}
                {mode === "register-step-3" && (
                
                    <>
                    <h1>crie seu cadastro</h1>
                    <p>agora defina sua senha de acesso</p>
                    <S.LoginForm>
                        <S.InputGroup>
                    <input value={formData.password}
                    className={errors.password ? "error" : ""}
                    onChange={(e) => handleChange("password", e.target.value)}
                    onBlur={() => handleBlur("password")}
                    placeholder="digite sua senha" type="password" />
                    {errors.password && (
                    <span className="error-message">*ei faltou preencher esse campo!</span>
                )}
                        </S.InputGroup>

                        <S.InputGroup>
                    <input value={formData.password}
                    className={errors.password ? "error" : ""}
                    onChange={(e) => handleChange("password", e.target.value)}
                    onBlur={() => handleBlur("password")}
                    placeholder="confirme sua senha" type="password" />
                    {errors.password && (
                    <span className="error-message">*ei faltou preencher esse campo!</span>
                )}
                        </S.InputGroup>
                        <S.ButtonsDiv>
                            <Button variant="secondary" size="md" onClick={() => setMode("register-step-2")}>voltar</Button>
                            <Button size="md" onClick={() => setMode("register-step-3")}>finalizar</Button>
                        </S.ButtonsDiv>
                    </S.LoginForm>
                    </>
                )}
        </S.LoginModal>
        </S.Overlay>
    )
}

export default LoginMenu