interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

async function Comments() {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments: Comment[] = await res.json();
  return (
    <div>
        <h1>Comments</h1>
        <ul>
            {comments.map((comment) => (
                <li key={comment.id}>{comment.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Comments