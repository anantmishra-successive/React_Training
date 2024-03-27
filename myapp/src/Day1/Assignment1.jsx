import React from "react";
import Greetings from "./Que1/Greetings";
import UserCard from "./Que2/UserCard";
import Weather from "./Que3/Weather";
import "./Que2/UserCard.css";

const data = [
  {
    name: "Anant Mishra",
    email: "anant.mishra@successive.tech",
    avatarURL: "https://avatar.iran.liara.run/public/job/police/male",
  },
  {
    name: "Ayush Pandey",
    email: "ayush.pandey@successive.tech",
    avatarURL: "https://avatar.iran.liara.run/public/job/designer/male",
  },
  {
    name: "Udit Sengar",
    email: "udit.pandey@successive.tech",
    avatarURL: "https://avatar.iran.liara.run/public/job/doctor/male",
  },
];

function Assignment1() {
  return (
    <div>
      <Greetings />
      <div className="users">
       
        {data.map((user) => {
      return <UserCard
            name={user.name}
            email={user.email}
            avatarURL={user.avatarURL}
          />;
        })}
      </div>
 <Weather temp = {7} />
 <Weather temp = {28} /> 
 <Weather temp = {12} />

    </div>
  );
}

export default Assignment1;
