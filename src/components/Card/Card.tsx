import { ReactNode } from "react";
import { CardHeader, CardLine, CardTitle, CardWrapper } from "./Card.style";

export function Card({title, index, children}: {title: string, index: string, children: ReactNode}) {
    return (
        <CardWrapper>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardTitle>{index}</CardTitle>
            </CardHeader>
            <CardLine />
            {children}
        </CardWrapper>
    )
}