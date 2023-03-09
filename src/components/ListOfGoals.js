import React from "react";

const ListOfGoals = (props) => {

  const displayList = (arr) => {
   return arr.map((item,index) => {
      return <li key={"li-"+index}>
      <p>My goal is to {item.goal}, by {item.by}.</p>
    </li>
    })
  }
    return (
      <ul>
      {displayList(props.sendList)}
        
      </ul>
    );
}

export default ListOfGoals;