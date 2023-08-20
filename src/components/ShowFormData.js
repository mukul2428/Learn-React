import "./ShowFormData.css";

function showFormData({ contact, handleEdit, handleDelete }) {
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
                onClick={() => handleDelete(elem.id)}
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
export default showFormData;
