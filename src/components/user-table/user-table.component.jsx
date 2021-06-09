import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, filterChange } from '../../redux/actions/user/userActions';
import UserRow from '../user-row/user-row.component';

const UserTable = () => {
  const { users, search } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (!users || !users.length) {
      dispatch(getUsers());
    }
    if (search === undefined || search === null) return;
    let temp = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setTableData([...temp]);
  }, [users, search]);

  const onFilterChange = (e) => {
    dispatch(filterChange(e.target.value));
  };

  const styles = {
    lineBlock: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  };

  return (
    <div>
      <h1>Some Data</h1>
      <div style={styles.lineBlock}>
        <p>Search:</p>
        <input type="text" onChange={onFilterChange} style={{ margin: 10 }} />
      </div>
      <div style={styles.lineBlock}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {tableData
              ? tableData.map((user) => <UserRow key={user.id} {...user} />)
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
