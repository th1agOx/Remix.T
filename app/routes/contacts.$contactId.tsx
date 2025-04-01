// "$" works as a parameter where any id on register can be load

import Contact from "~/components/Contact";
import { json,LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { FunctionComponent } from "react";


export type ContactType = {
        id: string,
        first: string,
        last: string,
        avatar: string,
        twitter: string,
        bio: string,
        favorite: boolean,
};

//fake database: 
const contacts: ContactType[] = [
    { 
        id: "1", 
        first: "Thiago", 
        last: "Pereira", 
        avatar: "https://placekitten.com/200/200", 
        twitter: "@thiago", 
        bio: "Some notes", 
        favorite: true 
    },
    { 
        id: "2", 
        first: "João", 
        last: "Silva", 
        avatar: "https://placekitten.com/200/300", 
        twitter: "@joao", 
        bio: "Other notes",
        favorite: false 
    },
];

export const loader: LoaderFunction = async({params}) => {
    const loadContact = contacts.find( i => i.id === params.contactId);
    if(!loadContact) 
        throw new Response("Contato invalido", {status: 404});

    return json<ContactType>(loadContact);
};

const ContactPage: FunctionComponent = () => {
    const contact = useLoaderData<ContactType>();

    return <Contact contact={contact} />
};

export default ContactPage;