import { useContext } from "react";
import StudentDispatchContext from "../context/StudentDispatchContext";

// this customer hook which is internally using context api, so intead of using "useContext"
// in individual component, we are using it here
function useStudentDispatch() {
  return useContext(StudentDispatchContext);
}
export default useStudentDispatch;
