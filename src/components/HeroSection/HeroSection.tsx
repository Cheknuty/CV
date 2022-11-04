import { useAppSelector } from "../../redux/hooks";
import { TextToggle } from "../../utils/TextToggler";
import { Avatar } from "../Avatar/Avatar";
import { HeroSectionBox, HeroSectionDesc, HeroSectionTitle, HeroSectionWrapper } from "./HeroSection.style";

export function HeroSection() {
    const lang = useAppSelector(state => state.lang)
    return (
        <HeroSectionWrapper>
            <Avatar />
            <HeroSectionBox>
                <HeroSectionTitle>Khikmatjon Azizov</HeroSectionTitle>
                <HeroSectionDesc>
                    {
                        TextToggle({
                            eng: "Frontend developer",
                            rus: "Фронтенд разработчик",
                            uzb: "Frontend dasturchi",
                            lang
                        })

                    }
                </HeroSectionDesc>
            </HeroSectionBox>
        </HeroSectionWrapper>
    )
}