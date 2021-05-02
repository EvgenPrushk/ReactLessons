import React, { useContext} from "react";
import ActionCard from "./ActionCard";
import Context from "./Context";



export default function ActionsCard(props) {
  const {  count } = props;

  const value= useContext(Context);

  return (
    <div className="card">
      <div className="d-flex flex-row  justify-content-center">
        <ActionCard  number={1} />
        <ActionCard number={3} />
        <ActionCard  number={5} />
        <ActionCard  number={25} />
      </div>
    </div>
  );
}
