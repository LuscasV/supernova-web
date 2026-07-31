import styled from 'styled-components'
import { colors } from '../../styles'

export const InputGroup = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
    
    label {
        position: absolute;
        top: -8px;
        left: 16px;

        background: ${colors.white};
        padding: 0 6px;

        font-size: 12px;

        z-index: 1;
    }

    label.error {
        color : ${colors.red}
    }

`