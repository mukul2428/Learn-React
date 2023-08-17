function EventHandling({ fname, lname, age, children, onClick }) {
  console.log(fname, lname, age, children);
  let selected = false; // don't use like this - we use state management
  let handleClick = (e) => {
    selected = !selected;
    e.stopPropagation(); // this will stop event bubbling - above buttons will not be clicked
    console.log(e);
    console.log("Clicked");
    onClick(); // this is prop function got from "App"
  };
  return (
    <div
      onClick={() => {
        console.log("Top se bhi clicked");
      }}
    >
      <label>{children}</label>
      <button onClick={handleClick}>
        Click Me {selected ? "play" : "pause"}
      </button>
    </div>
  );
}
export default EventHandling;

//we can access internal elements of components using children
// props are always readonly - we cannot change their value
// {selected ? 'play' : 'pause'} - here, using selected variable true/false dom is not changing, it will be forever be pause
