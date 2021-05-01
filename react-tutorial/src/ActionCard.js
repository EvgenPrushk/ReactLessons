import React from "react";

export default function ActionCard(props) {
  const { number, count } = props;
  const handlerClick = () => {
      count(number);
  }
  return (
    <div className="card m-2">
      <div className="card-body">
        <p>Купите наши книги</p>
        <button className="btn btn-primary btn-block" onClick={handlerClick}>Купить {number} книг</button>
      </div>
    </div>
  );
}
