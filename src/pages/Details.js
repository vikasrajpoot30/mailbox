import { mails } from "./MailDB";
import { useParams } from "react-router";

export function Details() {
  const { mailId } = useParams();
  const mailToShow = mails.find((mail) => mail.mId == mailId);
  return (
    <div>
      <h1></h1>
      <strong>{mailId}</strong> <br />
      <strong>Subject: {mailToShow.subject}</strong> <br />
      <p>{mailToShow.content}</p> <br />
    </div>
  );
}
