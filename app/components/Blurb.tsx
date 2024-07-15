import Container from "react-bootstrap/cjs/Container.js";

export default function Blurb({title="", otherHalf=null, position="start", align="left", children=<></>, style={}, className=""}) {
    return <>
        <Container style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: position
        }}>
          <div className={"col-lg-6 flex-grow " + className} style={{
            justifySelf: position,
            ...style
          }}>
            <h1 className="text-light" style={{
                fontSize: "48px",
                textAlign: align
            }}>{title}</h1>
            {children}
          </div>
          
          {(otherHalf != null) ? <><div className="col-lg-2 col-xl-3"></div><div className="col-xl-3 col-lg-4 d-flex">{otherHalf}</div></> : <></>}
        </Container>
        </>;
}