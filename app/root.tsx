import {
    Form,
    Links,
    Meta,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from '@remix-run/node';

import appStyledsHref from "./styles/app.css?url";

export const meta: MetaFunction = () => {
    return [
        { charSet: "utf-8" },
        { title: "Tuto Remix" },
        { viewport: "width=device-width, initial-scale=1"}
    ]
}

export const links: LinksFunction = () => {
    return [
        { 
            rel:"stylesheet", 
            href: appStyledsHref 
        },
        { 
            rel: "preconnect",
             href: "https://fonts.googleapis.com" 
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap",
        },
        { rel: "preload", href: "/favicon.ico",as: "image", type: "image/svg+xml" },
    ]
}

export default function App( {children}: { children: React.ReactNode }) {
    return(
        <html lang="en">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body>
            <div className="sidebar">
                <div className="searchWrapper">
                    <form id="search-form" role="search" >
                            <input 
                                aria-label="Search contacts" 
                                id="h"
                                name="h"
                                placeholder="Search"
                                type="search"
                            />
                            <div 
                                aria-hidden
                                hidden={true}
                                id="search-spinner"
                            />
                    </form>
                    <Form method="post">
                            <button type="submit">New</button>
                    </Form>
               </div>
               <nav>
                <ul>
                    <li>
                        <a href={`/contacts/1`}>Your Profile</a>
                    </li>
                    <li>
                        <a href={`/contacts/2`}>Your Friend</a>
                    </li>
                </ul>
               </nav>
               <div className="sidebarFotter">
                    <div className="remixIcon"></div>
                    <h1> 
                        BY <a href="https://github.com/th1agOx?tab=repositories" target="blank">TH1AGOX</a> 
                    </h1>
                </div> 
            </div>
            {children}
            <ScrollRestoration/>
            <Scripts/>
        </body>
        </html>
    );
}