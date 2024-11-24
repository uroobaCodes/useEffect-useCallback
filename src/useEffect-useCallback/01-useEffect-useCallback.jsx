import { useState, useEffect, useCallback } from "react";
import "../App.css";

const url = "https://api.github.com/users";

const UseEffectUseCallback = () => {
  const [users, setUsers] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("network request unsuccessful");
      }

      const result = await response.json();
      console.log(result);
      setUsers(result);
    } catch (error) {
      console.log(error.message);
    }
  }, [url]);

  // invoke it in useEffect
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (users.length > 0) {
      console.log("Users data:", users);
    }
  }, [users]);

  return (
    <div className="root-container">
      <h3 className="header">GitHUb Users</h3>

      <div className="user-container">
        <ul className="users">
          {users.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li key={id} className="list-items">
                <img src={avatar_url} alt="{login}" className="images" />

                <div className="text-container">
                  <h5 className="github-name">{login}</h5>
                  <a href={html_url} className="profile-url" target="_blank">
                    profile
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UseEffectUseCallback;
