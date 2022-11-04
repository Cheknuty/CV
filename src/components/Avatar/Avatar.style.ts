import styled, { keyframes } from "styled-components";

const avatar = keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(120deg) }
`

export const AvatarWrapper = styled.div`
    position: relative;
    min-height: 175px;
    min-width: 175px;

    & svg {
        position: absolute;
        left: 0;
        animation-duration: ${p => p.theme.animation.primary};
        animation-name: ${avatar};
        animation-iteration-count: 1;
        animation-timing-function: linear;
    }


    & .visible {
        opacity: 1;
    }
`

export const AvatarPic = styled.img`
    border-radius: 50%;
    position: absolute;
    left: 0;
    opacity: 0;
    transition: all 150ms ease-in-out;
`
