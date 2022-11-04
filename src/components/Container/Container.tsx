import { ReactNode } from "react";
import { ContainerWrapper } from "./Container.style";

export function Container({children}: {children: ReactNode}) {
    return (
        <ContainerWrapper>{children}</ContainerWrapper>
    )
}