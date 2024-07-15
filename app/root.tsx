import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import NavigationBar from "./components/NavigationBar";
import { ClientOnly } from "remix-utils/client-only";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { useRef } from "react";
import './output.css';


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Wittgenstein:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"/>
        <Meta />
        <Links />
      </head>
      <body style={{background:"black", display:"relative"}}>
        <NavigationBar></NavigationBar>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
