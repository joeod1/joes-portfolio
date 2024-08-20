import { CSSProperties, ReactNode } from "react";
import Container from "react-bootstrap/cjs/Container.js";

export interface BlurbProps {
  title: string;
  otherHalf?: ReactNode | undefined;
  position?: "start" | "left" | "center" | "end" | "right";
  align?: "start" | "left" | "center" | "end" | "right";
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export default function Blurb({title="", otherHalf, position="start", align="left", children=<></>, style={}, className=""} : BlurbProps) {
    return <>
        <Container className="jo-blurb" style={{justifyContent: position}}>
          <div className={"jo-blurb-content col-lg-6 flex-grow " + className} style={{justifySelf: position, ...style}}>
            <h1 className="text-light" style={{textAlign: align}}>{title}</h1>
            {children}
          </div>
          
          {(otherHalf !== undefined) ? <><div className="col-lg-2 col-xl-3"></div><div className="col-xl-3 col-lg-4 d-flex">{otherHalf}</div></> : <></>}
        </Container>
        </>;
}