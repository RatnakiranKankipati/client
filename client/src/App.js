// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
const App = () => {
  // get request

  //state for the getting the data
  // const [workouts, setWorkouts] = useState(null)

  //get request function
  // const getWorkouts = async () => {
  //   const response = await axios.get("http://localhost:4000/api/workouts")
  //   const data = response.data
  //   if (response) {
  //     setWorkouts(data)
  //   }
  //   console.log(data);
  // }
  // useEffect(() => {
  //   getWorkouts()
  // }, [])

  // post request

  // const[form,setForm]=useState({title:"",reps:"",load:""})
  // const updateFormField=(e)=>{
  //   const{name,value}=e.target
  //   setForm({
  //     ...form,[name]:value
  //   })
  // }

  // const createWorkout=async(e)=>{
  //   e.preventDefault()
  //   const response= await axios.post("http://localhost:4000/api/workouts",form)
  //   setWorkouts([...workouts,response.data])
  //   setForm({
  //     title:"",reps:"",load:""
  //   })
  //   getWorkouts()

  // }

  // delete request

  // const deleteWorkout=async(_id)=>{
  //   await axios.delete(`http://localhost:4000/api/workouts/${_id}`)
  //   getWorkouts()
  // }

  //update request

  // const[updateForm,setUpdateForm]=useState({
  //   _id:null,title:"",reps:"",load:""
  // })

  // const handleUpdateFieldChange= (e)=>{
  //   const{name,value}=e.target;
  //   setUpdateForm({
  //     ...updateForm,
  //     [name]:value
  //   })


  // }
  // const toggleUpdate=(item)=>{
  //   const {_id,title,reps,load}=item
  //   setUpdateForm({
  //     _id:_id,
  //     title:title,
  //     reps:reps,
  //     load:load
  //   })
  // }

  // const updateWorkout=(e)=>{
  //   e.preventDefault();
  //   const{_id,title,reps,load}=updateForm
  //   const response=axios.patch(`http://localhost:4000/api/workouts/${_id}`,{title,reps,load})
  //   getWorkouts()
  //   setUpdateForm({
  //     _id:null,title:"",reps:"",load:""
  //   })

  // }


  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
