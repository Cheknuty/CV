import styled from "styled-components";

export const AboutSectionWrapper = styled.section`
    padding: 30px 0;
`

export const AboutSectionList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    max-width: 300px;
`

export const AboutSectionDesc = styled.p`
    font-size: 8px;
    line-height: 11px;
    text-transform: uppercase;
`