import React from 'react';
import './App.css';
import PersonList from './PersonList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PersonListAdd from './PersonListAdd';
import PersonListDel from './PersonListDel';

function App() {
  return (
    <div className="container">
      <PersonList/>
      <PersonListAdd/>
      <hr/>
      <PersonListDel/>
    </div>
  );
}

export default App;
