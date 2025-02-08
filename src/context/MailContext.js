import { createContext, useState } from "react";
import { mails } from "../pages/MailDB.js";

export const MailContext = createContext();

export function MailProvider({ children }) {
  const [inbox, setInbox] = useState(mails);
  const [read, setRead] = useState([]);
  const [starred, setStarred] = useState([]);
  const [trash, setTrash] = useState([]);
  const [spam, setSpam] = useState([]);
  const [countOfUnread, setCountOfUnread] = useState(inbox.length);
  return (
    <MailContext.Provider
      value={{
        inbox,
        setInbox,
        read,
        setRead,
        starred,
        setStarred,
        trash,
        setTrash,
        countOfUnread,
        setCountOfUnread,
        spam,
        setSpam,
      }}
    >
      {children}
    </MailContext.Provider>
  );
}
