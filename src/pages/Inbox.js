import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { MailContext } from "../context/MailContext";

export function Inbox() {
  const {
    inbox,
    setInbox,
    trash,
    setTrash,
    spam,
    setSpam,
    countOfUnread,
    setCountOfUnread,
  } = useContext(MailContext);

  const [isRead, setIsRead] = useState(false);
  const [isStarred, setIsStarred] = useState(false);

  const handleSpam = (mId) => {
    const mailToSpam = inbox.find((mail) => mail.mId === mId);
    if (mailToSpam) {
      setSpam((prevSpam) => [...prevSpam, mailToSpam]);
      setInbox((prevInbox) => prevInbox.filter((mail) => mail.mId !== mId));
    }
  };

  const handleDelete = (mId) => {
    const mailToDelete = inbox.find((mail) => (mail.mId = mId));

    if (mailToDelete) {
      setTrash((prevTrash) => [...prevTrash, mailToDelete]);
      setInbox((prevInbox) => prevInbox.filter((mail) => mail.mId !== mId));
    }
  };

  const handleReadCheckBox = (event) => {
    setIsRead(event.target.checked);
  };
  const handleStarredCheckBox = (event) => {
    setIsStarred(event.target.checked);
  };

  const handleRead = (mId) => {
    setInbox((prevInbox) => {
      const updatedInbox = prevInbox.map((mail) =>
        mail.mId === mId ? { ...mail, isRead: true } : mail
      );

      // After updating inbox, update unread count
      // because react update inbox asynchronously
      // thats why separately updating
      setCountOfUnread(
        updatedInbox.reduce((acc, mail) => acc + (!mail.isRead ? 1 : 0), 0)
      );

      return updatedInbox;
    });
  };

  const handleStar = (mId) => {
    setInbox((inbox) =>
      inbox.map((mail) =>
        mail.mId == mId ? { ...mail, isStar: !mail.isStar } : mail
      )
    );
  };

  const filterdMails = inbox.filter((mail) => {
    if (isRead && !mail.isRead) return false;
    if (isStarred && !mail.isStar) return false;
    return true;
  });

  return (
    <>
      <fieldset>
        <legend>filter</legend>
        <div>
          <input
            type="checkbox"
            id=""
            name="undread"
            checked={isRead}
            onChange={handleReadCheckBox}
          />
          <label htmlFor="undread-mails">Show Unread Mails</label>
          <input
            type="checkbox"
            id=""
            name="starred"
            checked={isStarred}
            onChange={handleStarredCheckBox}
          />
          <label htmlFor="starred-mails">Show starred Mails</label>
        </div>
      </fieldset>

      <h3>Unread:{countOfUnread} </h3>

      <ol className="mail-box">
        {filterdMails.map((mail) => {
          return (
            <li className="mails">
              <strong>Subject: {mail.subject}</strong> <br />
              <button onClick={() => handleStar(mail.mId)}>
                {mail.isStar ? "UnStar" : "Star"}
              </button>
              <p>{mail.content}</p> <br />
              <Link
              to={`/inbox/${mail.mId}`}
              
              
              >View Details</Link>
              <button onClick={() => handleDelete(mail.mId)}>Delete</button>
              <button
                onClick={() => {
                  handleRead(mail.mId);
                }}
              >
                {mail.isRead ? "Mark As Unread" : "Mark As Read"}
              </button>
              <button onClick={() => handleSpam(mail.mId)}>Report Spam</button>
            </li>
          );
        })}
      </ol>
    </>
  );
}
