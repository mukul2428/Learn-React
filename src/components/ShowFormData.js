import "./ShowFormData.css";
import useStudentDispatch from "../hooks/StudentDispatch";
import useStudent from "../hooks/Student";
import axios from "axios";
import { useEffect, memo } from "react";

const student_data = memo(function ShowFormData({ handleEdit }) {
  const url = "https://my.api.mockaroo.com/student_contact.json?key=d6bb4330";

  // now we are using custom hooks instead of usecontext,
  // custom hook is internally using useContext
  const contact = useStudent();
  const dispatch = useStudentDispatch();

  async function callApi() {
    const res = await axios.get(url);
    console.log(res.data);
    dispatch({ type: "LOAD", payload: res.data });
  }

  useEffect(() => {
    callApi();
  }, []);

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
                onClick={() => dispatch({ type: "DELETE", payload: elem.id })}
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
      <button onClick={callApi}>Call API</button>
    </div>
  );
})
export default student_data;
