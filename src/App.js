import React from 'react';
import UserTable from './components/user-table/user-table.component';
import PostTable from './components/post-table/post-table.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <UserTable />
      <PostTable />
    </div>
  );
}

export default App;
