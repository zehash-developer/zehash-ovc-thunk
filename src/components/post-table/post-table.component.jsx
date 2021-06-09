import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/actions/post/postActions';
import PostRow from '../post-row/post-row.component';

const PostTable = () => {
  const { posts, postId } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(posts);
  }, [posts]);

  useEffect(() => {
    console.log(postId);
    dispatch(getPosts(postId));
  }, [postId]);

  const styles = {
    postTable: {
      marginTop: 20,
      paddingLeft: 50,
      paddingRight: 50,
    },
    lineBlock: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  };

  return (
    <div style={styles.postTable}>
      <div style={styles.lineBlock}>
        {tableData && tableData.length ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {tableData
                ? tableData.map((post) => <PostRow key={post.id} {...post} />)
                : null}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default PostTable;
