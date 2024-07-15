import { ReactNode } from "react";

export interface HobbySectionParams {
    children: ReactNode
}

export default function HobbySection({ children } : HobbySectionParams) {
    return <div className="hobby-section">{children}</div>;
}


export interface HobbyParams {
    name : string
    children: ReactNode
}

export function Hobby({ name, children } : HobbyParams) {
    return (
        <div className="hobby-card py-4" data-bs-theme="dark">
            <h3 className="hobby-header">{name}</h3>
            <div className="hobby-content">{children}</div>
        </div>
    );
}

