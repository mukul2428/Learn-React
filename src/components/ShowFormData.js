import { useContext } from "react";
import "./ShowFormData.css";
import StudentContext from "../context/StudentContext";
import StudentDispatchContext from "../context/StudentDispatchContext";

function ShowFormData({ handleEdit }) {

  //context use = this is global variable
  const contact = useContext(StudentContext);
  const dispatch = useContext(StudentDispatchContext);

  return (
    <div className="main-box">
      {contact.map((elem) => {
        return (
          <div key={elem.id} style={{ position: "relative" }}>
            <div className="change-btn">
              <span onClick={() => handleEdit(elem.id)} className="edit-btn">
                🖊️
              </span>
              <span
                onClick={() => dispatch({ type: 'DELETE', payload: elem.id })}
                className="delete-btn"
              >
                🗑️
              </span>
            </div>
            <div className="container">
              <div>
                <span className="tag-name">FirstName: </span>
                {elem.fname}
              </div>
              <div>
                <span className="tag-name">LastName: </span>
                {elem.lname}
              </div>
              <div>
                <span className="tag-name">Place:</span> {elem.place}
              </div>
              <div>
                <span className="tag-name">School:</span> {elem.school}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ShowFormData;
