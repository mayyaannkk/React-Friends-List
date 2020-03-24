import React from "react";
import "./App.css";

const App = () => {
  return <PersonList />;
};

const PersonList = () => {
  const people = [
    {
      name: "John",
      job: "Developer",
      img: 22
    },
    {
      name: "Jake",
      job: "Designer",
      img: 18
    },
    {
      name: "Peter",
      job: "Artist",
      img: 30
    }
  ];
  return (
    <div>
      <Person people={people[0]} />
      <Person people={people[1]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        condimentum ligula ac sapien dictum imperdiet.{" "}
      </Person>
      <Person people={people[2]} />
    </div>
  );
};
const Person = props => {
  const { name, job, img } = props.people;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default App;
