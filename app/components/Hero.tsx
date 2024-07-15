export default function Hero({image, miny=250, top=false, children, id=undefined, style={}}) {
    return <>
        <div style={{
            backgroundImage: image, 
            position:(top) ? "relative" : "static", 
            paddingTop:(top) ? "128px" : "64px",
            marginTop:(top) ? "-56px" : 0, 
            zIndex:0, 
            paddingBottom:"64px", 
            top:0, 
            backgroundSize:"cover", 
            backgroundPosition:"50% 50%", 
            minHeight:`${miny}px`, 
            width: "100%",
            color:"white",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            boxSizing:"border-box",
            ...style}}
            id={id}
            >
            {children}
        </div>
    </>
}