import { useAppSelector } from "../../redux/hooks";
import { Icon } from "../Icon";
import { AvatarPic, AvatarWrapper } from "./Avatar.style";
import avatar from "../../assets/img/avatar.jpg"
import { useState } from "react";

export function Avatar() {
    const theme = useAppSelector(state => state.theme)
    const [visible, setVisible] = useState<boolean>(false)
    return (
        <AvatarWrapper>
        <Icon width={175} color={theme === "light" ? "#000" : "#FFF"} onClick={() => setVisible((prev) => !prev)} />
            <AvatarPic src={avatar} width={175} className={visible ? "visible" : ""} onClick={() => setVisible((prev) => !prev)} />
        </AvatarWrapper>
    )
}