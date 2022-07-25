import { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './components/Todo';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    return () => {
      db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => ({
          id: doc.id,
          item: doc.data()
        })))
      })
    }
  }, [input])


  const addTodd = (e) => {
    e.preventDefault()


    // setTodos([...todos, input])

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
  }

  return (
    <div className="App">
      <h1> Ola's Todo List</h1>

      {/* <form>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button type='submit' onClick={addTodd}> Add TODO</button>
     </form> */}

      <form>
        <FormControl>
          <InputLabel> My TODO List </InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </FormControl>

        <Button type='submit' onClick={addTodd} variant='contained'
          color='primary' disabled={!input}> Add TODO </Button>
      </form>





      <u1>
        {todos.map(todo => <Todo key={todo.id} arr={todo} />)}
      </u1>


    </div>
  );
}

export default App;
