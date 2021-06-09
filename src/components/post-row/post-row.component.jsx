import React from 'react';

const PostRow = ({ id, title, body }) => {
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
};

export default PostRow;
