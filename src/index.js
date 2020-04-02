import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


const Person = (Props) => {
  console.log(Props);
  return (
    <div className="person">
      <img src={`https://randomuser.me/api/portraits/med/men/${Props.img}.jpg`} alt="Men-Pictures" />
      <p>{Props.name}</p>
      <p>{Props.job}</p>
      {Props.children}
    </div>
  )
}



const PersonsList = () => {
  return (
    <div className="personList">
      <Person img="35" name="Paul" job="Developer">
        <p>A passionate and enticing fellow.........</p>
      </Person>
      <Person img="10" name="John" job="Designer" />
      <Person img="45" name="Mark" job="Boss" />
    </div>
  )
}



ReactDOM.render(<PersonsList />, document.getElementById("root"));