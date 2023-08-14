function Test(props) {
    console.log(props);
    const firstName = props.user ? props.user.firstName : "X";
    return (<><h1>Test Welcome</h1> <h2>{firstName}</h2></>)
}

export default Test;