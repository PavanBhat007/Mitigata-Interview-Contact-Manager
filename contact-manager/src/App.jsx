import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import { contacts } from "./db";

import "../App.css";

function App() {
  const [contactList, setContactList] = useState(null);

  useEffect(() => {
    setContactList(contacts);
  }, []);

  return (
    <>
      <div>
        <h1 className="main-heading">Smart Contact Directory</h1>

        {contactList.map((cnt, idx) => (
          <Contact key={cnt.id} contact={cnt} />
        ))}
      </div>
    </>
  );
}

export default App;
