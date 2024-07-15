import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

export default function WorkExpr({date="", company=null, description=""}) {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot variant="outlined"></TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <i style={{fontSize:"8pt"}}>{date}</i>
                {(company != null) ? <h5 style={{marginBottom:2, fontSize:"12pt"}}>{company}</h5> : <></>}
                <p style={{color:"#EEE"}}>{description}</p>
            </TimelineContent>
        </TimelineItem>
    );
}