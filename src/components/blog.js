//we usually prefer destructure way of props
// function Blog({posts = {id: 34, name: "MR"}}) - can use default value

function Blog(props) {
    // const content = props.posts.map((post) => {
    //     return <Post key={post.id} post={post} />;
    // });
    // return <div>{content}</div>;
    //or
    return <div>{props.posts.map((post) =>
        <Post key={post.id} post={post} />
    )
    }</div>;
}
function Post(props) {
    const { id, title, content } = props.post;
    return (
        <div>
            <div>{id}</div>
            <div>{title} </div>
            <div>{content}</div>
        </div>
    );
}

export default Blog;

// export {Blog, Post} - export two componenets
// import {Blog, Post} - import like this