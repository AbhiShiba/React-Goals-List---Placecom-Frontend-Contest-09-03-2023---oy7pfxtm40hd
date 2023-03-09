import React, { useState } from "react";

const GoalForm = (props) => {
    // const [input1,setInput1] = useState("")
    // const [input2,setInput2] = useState("")
      const [formData, setFormData] = useState({
        goal: "",
        by: ""
      });

    const input1Handler = (e) => {
        setFormData({
          ...formData,
          goal: e.target.value
        })
    }

    const input2Handler = (e) => {
      setFormData({
        ...formData,
        by: e.target.value
      })
    }
    
    const submitForm = (e) => {
      e.preventDefault()
      // console.log(formData);

      props.sendData[1]([
        ...props.sendData[0],
        formData]
      )

      // console.log(props.sendData);

      setFormData({
        goal: "",
        by: ""
      })
    }
  
    return (
      <>
        <h1>My Goals</h1>
        <form onSubmit={submitForm}>
          <input 
            type="text" 
            name='goal' 
            placeholder='Goal...'
            onChange={input1Handler}
            value={formData.goal}
          />
          <input 
            type="text"
            name="by"
            placeholder='By...'
            onChange={input2Handler}
            value={formData.by}
          />
          <button >Add</button>
        </form>
      </>
    )
}

export default GoalForm;