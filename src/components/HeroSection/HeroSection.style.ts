import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
    display: grid;
    grid-template-columns: 175px 1fr;
    grid-column-gap: 5%;
    align-items: center;
`

export const HeroSectionTitle = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 32px;
    margin: 0;
    margin-bottom: 15px;
`

export const HeroSectionDesc = styled.p`
    font-weight: 400;
    font-size: 30px;
    line-height: 32px;
    margin: 0;
    font-family: ${p => p.theme.fonts.secondary};
`

export const HeroSectionBox = styled.div`

`