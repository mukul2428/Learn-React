function List({ list }) {
  return (
    <ul>
      {list.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}
export default List;
