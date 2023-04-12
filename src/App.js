import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {changeValue, showFacts, reloadData} from "./app/factReducer";


function App() {

  const name = useSelector(state => state.value)
  const facts = useSelector(state => state.data)
  const reload = useSelector(state => state.reloadData)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeValue(e.target.value))
    dispatch(showFacts(name))
  }

  useEffect(() => {
    if (name === '') {
      dispatch(reloadData(reload))
    }
  }, [name,reload, dispatch])

  return (
    <div className="App">
        <input value={name} onChange={handleChange} type="text" className="input"/>

      <ul>
        {
          name >= 1 && name <= 5 ?
            facts.map(item => {
                return (
                  <li style={{marginBottom: '10px'}} key={item}>{item}</li>
                )
              }
            )
            : null
        }
      </ul>
    </div>
  );
}

export default App;
