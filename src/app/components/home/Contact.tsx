import { getContactInfoData } from "@/app/api/data";

type Contact = {
  id: string;
  key: string;
  value: string;
};

type ContactInfo = [Contact];

export default async function Contact() {
  const contactInfo: ContactInfo = await getContactInfoData();

  return (
    <div className="card-1 group">
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
