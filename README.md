## Mailbox App - Summary

### Key Implementations & Learnings

1. **Built a Mailbox App using React Router**  
   - Implemented navigation between *Inbox, Spam,* and *Trash* using `react-router-dom`.  
   - Used `NavLink` for styling active links and `Routes` for defining page navigation.  

2. **State Management with Context API & useState**  
   - Used `MailContext` to manage global states like `inbox`, `spam`, `trash`, and `countOfUnread`.  
   - Applied `useState` for local states like `isRead` and `isStarred` for filtering emails.  

3. **Email Actions & Filtering Functionality**  
   - Added features to mark emails as *read/unread*, *starred*, *delete*, and *report spam*.  
   - Implemented checkboxes to filter emails based on *read* and *starred* status.  

4. **Technology Stack Used**  
   - **React.js** (for UI components and state management)  
   - **React Router** (for navigation and dynamic routes like `inbox/:mailId`)  
   - **CSS** (for styling the mailbox layout and navigation)  
   - **JavaScript (ES6+ features)** such as array methods (`map`, `filter`, `reduce`) for efficient state updates.  

---

###  Points

- Developed a mailbox app using **React.js** and **React Router** for seamless email navigation.  
- Implemented **state management** using Context API and `useState` for dynamic email handling.  
- Designed interactive features like **mark read/unread, starring, deletion, and spam reporting**.  
- Optimized UI with **CSS styling** and improved performance with efficient **JavaScript state updates**.  
