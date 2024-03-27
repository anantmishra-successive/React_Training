import React from "react";
import Greetings from "./Que1/Greetings";
import UserCard from "./Que2/UserCard";
import Weather from "./Que3/Weather";
import Counter from "./Que4/Counter";
import TaskList from "./Que5/TaskList";
import Button from "./Que6/Button";
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

const Tasks = [{
    id: 1,
    title: "Playing",
    completed: false,
  },
  {
    id: 2,
    title: "Coding",
    completed: false,
  },
  {
    id: 3,
    title: "Reading",
    completed: false,
  },
  {
    id: 4,
    title: "Trading",
    completed: false,
  },
]

function Assignment1() {
  return (
    <div>
        <h3>Question 1</h3>
      <Greetings />
      <h3>Question 2</h3>
      <div className="users">
       
        {data.map((user) => {
      return <UserCard
            name={user.name}
            email={user.email}
            avatarURL={user.avatarURL}
          />;
        })}
      </div>
      <h3>Question 3</h3>
 <Weather temp = {7} />
 <Weather temp = {28} /> 
 <Weather temp = {12} />
 <br />
 <h3>Question 4</h3>
 <Counter />
 <h3>Question 5</h3>
<TaskList task={Tasks}/>
<h3>Question 6</h3>
<div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
<Button color={"red"} text={"Click Me"}/>
<Button color={"green"} text={"Success"}/>
</div>
    </div>
  );
}

export default Assignment1;
