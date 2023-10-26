// DataTypes
import { Contact, ContactPropsInfo } from "@/app/api/dataTypes";

export default function Contact({
  contactInfo,
}: ContactPropsInfo): JSX.Element {
  return (
    <div className="card-1 group" id="contact">
      <div className="flex flex-col gap-5">
        <div className="title-2">Contact</div>
        <div className="flex flex-col gap-2">
          {contactInfo.map((contact: Contact) => (
            <div key={contact.id} className="flex flex-col sm:flex-row gap-3">
              <div className="title-4">{contact.key}</div>
              <div className="hidden sm:block secondary-color">-</div>
              <div className="title-5 cursor-copy">{contact.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
