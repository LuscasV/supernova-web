import * as S from "./styles"

const InputField = ({ field, type = "text", placeholder, label, formData, errors, handleChange, handleBlur}) => {

    return (
        <S.InputGroup>
            {label && (
                <label
                className={errors[field] ? "error" : ""}
                > {label}
                </label>
            )}

            <input type={type}
            placeholder={placeholder}
            value={formData[field]}
            className={errors[field] ? "error" : ""} 
            onChange={(e) => handleChange(field, e.target.value)}
            onBlur={() => handleBlur(field)}
            />

            {errors[field] && (
                <span className="error-message">*Ei, faltou preencher esse campo!</span>
            )}

        </S.InputGroup>
    )
}

export default InputField