import Badge from "@mui/material/Badge";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { animated, useSpring } from "react-spring";

export interface ProjectCardData {
    title: string | undefined
    description: string | undefined
    image: string | null | undefined
    link: string | null | undefined
    id: string | null | undefined
    gif: string | null | undefined
    languages: Array<string> | undefined
    frameworks: Array<string> | undefined
}

export default function ProjectCard({title="", description="", image=null, gif=null, languages=[], frameworks=[]} : ProjectCardData) {
    const [active, setActive] = useState(false);

    const [contSpring, contAPI] = useSpring(()=>({
        from: {
            marginBottom: -128,
            top: -128
        }
    }));

    const [imgSpring, imgAPI] = useSpring(()=>({
        from: {
            maskImage: "linear-gradient(black 20%, rgba(0,0,0,40%) 50%, rgba(0,0,0,0%) 224px)"
        }
    }));

    function toggleImage() {
        if (image == null) return;
        setActive(val=>!val);
        if (active) {
            contAPI.start(()=>({
                to: {
                    marginBottom: -128,
                    top: -128
                },
                from: {
                    marginBottom: 0,
                    top: 0
                },
            }));
            imgAPI.start(()=>({
                to: {
                    maskImage: "linear-gradient(black 20%, rgba(0,0,0,40%) 50%, rgba(0,0,0,0%) 224px)"
                },
                from: {
                    maskImage: "linear-gradient(black 100%, rgba(0,0,0,40%) 100%, rgba(0,0,0,0%) 256px)"
                }
            }));
        } else {
            contAPI.start(()=>({
                to: {
                    marginBottom: 0,
                    top: 0
                },
                from: {
                    marginBottom: -128,
                    top: -128
                }
            }));

            
            imgAPI.start(()=>({
                from: {
                    maskImage: "linear-gradient(black 20%, rgba(0,0,0,40%) 50%, rgba(0,0,0,0%) 224px)"
                },
                to: {
                    maskImage: "linear-gradient(black 100%, rgba(0,0,0,40%) 100%, rgba(0,0,0,0%) 256px)"
                }
            }));
        }
    }


    return <>
        <a style={{textDecoration:"none"}}>
        <div className="m-2">
        <Card data-bs-theme="dark" style={{overflow:"hidden"}}>
            <div className="g-0">
                {(image != null) ? 
                <div style={{height:"256px", width: "100%"}}>
                    <animated.img onMouseDown={toggleImage} src={(gif != null && active) ? gif : image} alt="" className="img-fluid h-100 w-100" style={{objectFit: "cover", ...imgSpring}}></animated.img> {/*style= (active) ? {objectFit:"cover", maskImage: "linear-gradient(black 20%, rgba(0,0,0,40%) 50%, rgba(0,0,0,0%) 224px)", transitionDuration: "1s"} : {transitionDuration: "1s", objectFit:"cover"}}></img>*/}
                </div>
                : <></>}
                <animated.div className="" style={(image != null) ? {position:"relative", ...contSpring} : {}}>
                    <h5 className="px-3 pt-3">{title}  
                    {languages.map((element) => 
                            <span key={element} className="badge bg-primary ml-1">{element}</span>
                        )}
                        {frameworks.map((element) => 
                            <span key={element} className="badge bg-secondary ml-1">{element}</span>
                        )}</h5>
                    <p className="px-3 pb-3">{description}</p>
                </animated.div>
            </div>
        </Card>
        </div>
        </a>
    </>
}