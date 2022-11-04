import { useAppSelector } from "../../redux/hooks";
import { TextToggle } from "../../utils/TextToggler";
import { Card } from "../Card/Card";
import { AboutSectionDesc, AboutSectionList, AboutSectionWrapper } from "./AboutSection.style";

export function AboutSection() {
    const lang = useAppSelector(state => state.lang)
    return (
        <AboutSectionWrapper>
            <AboutSectionList>
                <Card title={TextToggle({eng: "Contacts", rus: "Контакты", uzb: "Kontaktlar", lang})} index="01">
                    <AboutSectionDesc>Github.com/Cheknuty</AboutSectionDesc>
                    <AboutSectionDesc>t.me/cheknuty</AboutSectionDesc>
                    <AboutSectionDesc>+998977777777</AboutSectionDesc>
                </Card>
                <Card title={TextToggle({eng: "Eduaction", rus: "Образование", uzb: "Talim", lang})} index="02">
                    <AboutSectionDesc>Tashkent University of Information Technologies</AboutSectionDesc>
                    <AboutSectionDesc>Najot Talim</AboutSectionDesc>
                    <AboutSectionDesc>Optimus Science</AboutSectionDesc>
                </Card>
                <Card title={TextToggle({eng: "Skills", rus: "Навыки", uzb: "Konikmalar", lang})} index="03">
                    <AboutSectionDesc>HTML</AboutSectionDesc>
                    <AboutSectionDesc>CSS</AboutSectionDesc>
                    <AboutSectionDesc>SASS</AboutSectionDesc>
                    <AboutSectionDesc>JavaScript</AboutSectionDesc>
                    <AboutSectionDesc>ReactJS</AboutSectionDesc>
                    <AboutSectionDesc>Redux</AboutSectionDesc>
                </Card>
                <Card title={TextToggle({eng: "Languages", rus: "Языки", uzb: "Tillar", lang})} index="04">
                    <AboutSectionDesc>Uzbek</AboutSectionDesc>
                    <AboutSectionDesc>Russian</AboutSectionDesc>
                    <AboutSectionDesc>English</AboutSectionDesc>
                </Card>
            </AboutSectionList>
        </AboutSectionWrapper>
    )
}