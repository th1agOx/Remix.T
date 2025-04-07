import {ContactType} from "~/routes/contacts.$contactId"

type ContactProps = {
    contact:ContactType
};

export default function Contact({contact}: ContactProps) {
    return (
        <div className="profileContainer">
            <img 
                src={contact.avatar} 
                alt={`Profile of ${contact.first} ${contact.last}`} 
                key={contact.id}
            />
            <h1>
                {contact.first} || {contact.last ? (
                <>    
                    {contact.avatar} {contact.last}
                </>
                ) : (
                    <i> No Name </i>
                )} {" "}
                {/* <Favorite contact={contact} /> */}
            </h1>
            <p>
                Twitter: @{contact.twitter}
            </p>
            <p>
                {contact.bio}
            </p>
        </div>
    )
}
