import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-2">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

// const Card = ({ name, email, id }) => {
//     return [
//       <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-2">
//         <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"></img>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>,
//     ];
//   };
// this is called Fragment with React 16.2 this works with [] brackets after return no need to make loads of divs
