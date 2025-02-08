import { useContext } from "react";
import { MailContext } from "../context/MailContext";
export function Spam() {
  const { spam } = useContext(MailContext);

  return (
    <div>
      <h1>Spam Folder </h1>
      <div>
        <ol className="mail-box">
          {spam.map((mail) => {
            return (
              <li className="mails">
                <strong>Subject: {mail.subject}</strong> <br />
                <p>{mail.content}</p> <br />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
