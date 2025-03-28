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
        { viewport: "width=device-width, initial-scale=1" }
    ]
}

export const links: LinksFunction = () => {
    return [
        { rel:"stylesheet", href: appStyledsHref },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },
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
                <h1>Remix Contacts</h1>
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
                        <a href={`/contacts/1`}>Your Name</a>
                    </li>
                    <li>
                        <a href={`/contacts/2`}>Your Friend Name</a>
                    </li>
                </ul>
               </nav>
            </div>
            {children}
            <ScrollRestoration/>
            <Scripts/>
        </body>
        </html>
    );
}