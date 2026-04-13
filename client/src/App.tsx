import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Workouts from '../features/workout/Workouts.tsx'
import { useState } from 'react';

function App() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  }
  return (
    <>
      <Navbar handleClick={toggleForm} />
      <main>
        {
          showForm && <Form />
        }
        <Workouts />
      </main>
    </>
  );
}

export default App
