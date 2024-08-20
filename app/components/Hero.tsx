import { CSSProperties, ReactNode } from "react";

export interface HeroProps {
    image: string;
    miny: number | string;
    top?: boolean;
    children: ReactNode | undefined;
    id?: string | undefined;
    background: string;
    style?: CSSProperties;
}


export default function Hero({image, miny=250, top=false, children, id, background="black", style={}} : HeroProps) {
    return <div className={`jo-hero ${ top ? "top" : "" }`} style={{backgroundColor: background, backgroundImage: image, minHeight: miny, ...style}} id={id}>
               {children}
           </div>;
}