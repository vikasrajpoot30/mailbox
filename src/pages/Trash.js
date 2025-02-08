import { useContext } from "react";
import { MailContext } from "../context/MailContext";

export function Trash() {
  const { trash } = useContext(MailContext);
  return (
    <div>
      <h1>Trash Folder </h1>

      <ol className="mail-box">
        {trash.map((mail) => {
          return (
            <li className="mails">
              <strong>Subject: {mail.subject}</strong> <br />
              <p>{mail.content}</p> <br />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
