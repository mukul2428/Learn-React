import { useContext } from "react";
import StudentContext from "../context/StudentContext";

// this customer hook which is internally using context api, so intead of using "useContext"
// in individual component, we are using it here
function useStudent(){
    return useContext(StudentContext);
}
export default useStudent;