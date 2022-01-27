import React from "react";
import Post from "../Post/post";

const NEWS = [
  {
    author: "Roman",
    created_at: "2021-12-01T20:12:22.811Z",
    num_comments: 10,
    objectID: 1,
    title: "Jest & Enzyme",
    points: 100,
    url: "//some-test.url",
  },
  {
    author: "Natasha",
    created_at: "2022-01-01T20:54:12.116Z",
    num_comments: 8,
    objectID: 2,
    title: "TypeScript",
    points: 10,
    url: "//test-ts.url",
  },
];

const Posts = () => (
  <ul className="newsList">
    {NEWS.map(
      ({ author, created_at, num_comments, objectID, title, points, url }) => (
        <Post
          key={objectID}
          author={author}
          created_at={created_at}
          num_comments={num_comments}
          title={title}
          points={points}
          url={url}
        />
      )
    )}
  </ul>
);

export default Posts;
