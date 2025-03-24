import type { LinksFunction } from '@remix-run/node';

import appStyledsHref from "./app.css?url";

import {
    Form,
    Links,
    Meta,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStyledsHref}
]

export default function App() {
    return(
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta 
                name="viewport" 
                content="width=device-width, initial-scale=1.0"
            />
            <Meta/>
            <Links/>
        </head>
        <body>
            <div className="sidebar">
                <h1>Remix Contacts</h1>
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
            <ScrollRestoration/>
            <Scripts/>
        </body>
        </html>
    );
}