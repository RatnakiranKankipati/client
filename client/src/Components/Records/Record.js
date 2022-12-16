
import React, { useEffect, useState } from 'react'
import axios from "axios"



const Record = () => {
    // get request

  //state for the getting the data
  const [workouts, setWorkouts] = useState(null)

  //get request function
  const getWorkouts = async () => {
    const response = await axios.get("http://localhost:4000/api/workouts")
    const data = await response.data

      setWorkouts(data)
  }
  useEffect(() => {
    getWorkouts()
  }, [])
  return (
    <div>
      {workouts.map((item) => {
        const { _id,title, reps, load } = item
        return (
          <div className="record" key={_id}>
            <h1>{title}</h1>
            <p>{reps}</p>
            <p>{load}</p>
            {/* <button onClick={()=>toggleUpdate(item)}>edit</button>
            <button onClick={()=>deleteWorkout(_id)}>delete</button> */}
          </div>
        )

      })} 
    </div>
  )
}

export default Record