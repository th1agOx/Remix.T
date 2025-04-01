import {ContactType} from "~/routes/contacts.$contactId"

type ContactProps = {
    contact:ContactType
};

export default function Contact({contact}: ContactProps) {
    return (
        <div>
            <img src={contact.avatar} alt={`${contact.first} ${contact.last}`} />
            <h1>{contact.avatar} {contact.last}</h1>
            <p>Twitter: @{contact.twitter}</p>
            <p>{contact.bio}</p>
        </div>
    )
}
