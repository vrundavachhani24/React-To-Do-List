import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [task, setTask] = useState('')
  const [adddata, setAddData] = useState([])
  const [Editid, setEditId] = useState('')

  const handlechange = (event) => {
    setTask(event.target.value)
  }

  const handleaddtaskdata = () => {
    const userobj = { id: uuidv4(), task }
    setAddData([...adddata, userobj])
    setTask('')
  }

  const handleDelete = (id) => {
    const deletedata = adddata.filter((ele) => ele.id !== id)
    setAddData(deletedata)
  }

  const handleEdit = (id) => {
    const EditData = adddata.find((ele) => ele.id === id)
    setEditId(id)
    setTask(EditData?.task)
  }

  const updateTask = () => {
    const updatedData = adddata.map((ele) => {
      if (ele.id === Editid) {
        return { id: ele.id, task }
      }
      return ele;
    })
    setAddData(updatedData);
    setEditId(null)
    setTask('')
  }


  return (
    <div>
      <div className='text-center rounded-3xl bg-linear-to-bl from-violet-500 to-fuchsia-500 p-7 w-lg place-self-center mt-5 text-white shadow-md'>
        <h1 className='text-4xl'>To-Do List</h1>
        <div className='gap-3 mt-7'>
          <input type="text" onChange={handlechange} value={task} className='border-1 p-3 rounded-xl' placeholder='Enter your Task..' />
          {
            Editid ? (<button type='button' className='bg-green-700 text-white p-3 ms-5 font-bold w-25 cursor-pointer rounded-xl' onClick={updateTask}>Update</button>)
              : (<button type='button' className='bg-linear-65 from-purple-800 to-pink-500 text-white p-3 ms-5 font-bold w-25 cursor-pointer rounded-xl' onClick={handleaddtaskdata}>Add</button>)
          }
          {
            adddata.map((ele) => {
              return (
                <div key={ele?.id} className='border-1 mt-3 p-2 justify-between flex items-center rounded-xl'>{ele.task}
                  <div>
                    <button onClick={() => { handleDelete(ele.id) }} className='border-1 p-2 bg-red-600 border-none cursor-pointer rounded-xl'>Delete</button>
                    <button onClick={() => { handleEdit(ele.id) }} className='border-1 ms-5 p-2 bg-green-700 border-none cursor-pointer rounded-xl'>Edit</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
