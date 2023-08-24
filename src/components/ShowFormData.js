import "./ShowFormData.css";
import useStudentDispatch from "../hooks/StudentDispatch";
import useStudent from "../hooks/Student";

function ShowFormData({ handleEdit }) {

  // now we are using custom hooks instead of usecontext,
  // custom hook is internally using useContext
  const contact = useStudent();
  const dispatch = useStudentDispatch();

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
