import { useEffect, useState } from "react";

function UsersSection() {
  const url = "https://boolean-uk-api-server.fly.dev/johanreitan/contact";
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData);
    };
    fetchData();
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {filteredData.map((user, index) => (
            <li 
            key={index}
            style={{ background: user.favouriteColour || "gray" }}>
              <img
                src={user.profileImage}
                alt={user.firstName + " " + user.lastName}
              />
              <h3>{user.firstName} {user.lastName}</h3>
              <p>Email: {user.email}</p>
            </li>

          ))};
          <li style={{background: "#0d7f26"}}>
            <img
              src="https://www.gravatar.com/avatar/chloe.lopez@example.com?s=120&d=identicon"
              alt="Chloe Lopez"
            />
            <h3>Ms Chloe Lopez</h3>
            <p>Email: chloe.lopez@example.com</p>
          </li>
        </ul>
      </div>
    </section>

  )
}

export default UsersSection
