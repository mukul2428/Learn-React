//context = effectively produce global variables that can be passed around. it is alternative
// to moving props from grandparent to child to parent

import { createContext } from "react";

const StudentContext = createContext(null);

export default StudentContext;