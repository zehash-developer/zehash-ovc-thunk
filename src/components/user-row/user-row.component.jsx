import React from 'react';
import { useDispatch } from 'react-redux';
import { postChange } from '../../redux/actions/post/postActions';

const UserRow = ({ id, name, email, address, company }) => {
  const dispatch = useDispatch();

  const styles = {
    cursorPointer: {
      cursor: 'pointer',
    },
  };

  const onClickUser = (id) => {
    console.log('Clicking User ID: ' + id);
    dispatch(postChange(id));
  };

  return (
    <tr key={id} style={styles.cursorPointer} onClick={() => onClickUser(id)}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address.city}</td>
      <td>{company.name}</td>
    </tr>
  );
};

export default UserRow;
