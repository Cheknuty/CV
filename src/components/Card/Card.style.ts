import styled, { keyframes } from "styled-components";

const line = keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
`

export const CardWrapper = styled.li`
    
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
`

export const CardTitle = styled.h2`
    font-family: ${p => p.theme.fonts.secondary};
    margin: 0;
    font-size: 9px;
    line-height: 12px;
    text-transform: uppercase;
`

export const CardLine = styled.div`
    height: 1px;
    background-color: ${p => p.theme.colors.secondary};
    animation-name: ${line};
    animation-duration: ${p => p.theme.animation.primary};
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
`