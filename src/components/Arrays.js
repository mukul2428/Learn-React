function Arrays({ blogs }) {
  // blogs = [
  //   ...blogs,
  //   {
  //     id: 7,
  //     title: "Javascript",
  //     content: "Hello Javascript!",
  //   },
  // ];
  blogs.push(
    {
      id: 7,
      title: "Javascript",
      content: "Hello Javascript!",
    }
  )
  return (
    <ul>
      {blogs.map((ele) => {
        return <li key={ele.id}> {JSON.stringify(ele)}</li>;
      })}
    </ul>
  );
}
export default Arrays;
