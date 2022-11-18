import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function Form({postedCharacters}) {
    
    const [name, setName] = useState("")
    const [height, setHeight] = useState("")
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [bio, setBio] = useState("")
    const [wealth, setWealth] = useState("")
    const [gender, setGender] = useState("")

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        let newCharacter = {
            name: name,
            height: height,
            image: image,
            title: title,
            bio: bio,
            wealth: wealth,
            gender: gender
        }

    fetch("http://localhost:8001/singles",{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newCharacter)
    })
    .then(r => r.json())
    .then((newCharacter) => { 
      postedCharacters(newCharacter)
      navigate("/Singles")})
    }

    return (
        <form onSubmit={handleSubmit} className="character-form">

        <h2>❤️‍🔥 Sign Up For Free! ❤️‍🔥</h2>

        <label htmlFor="name">Name: </label>
        <input name="name" value={name} placeholder='Name' onChange= {(e) => setName(e.target.value)}/>

        <label htmlFor="height">Height: </label>
        <input name="height" type="number" value={height} placeholder='Height in CM' onChange= {(e) => setHeight(e.target.value)}/>
  
        <label htmlFor="image">Image: </label>
        <input name="image" value={image} placeholder='Image URL' onChange= {(e) => setImage(e.target.value)}/>
  
        <label htmlFor="title">Title: </label>
        <input name="title" value={title} placeholder='ex Bran The Broken' onChange= {(e) => setTitle(e.target.value)}/>
  
        <label htmlFor="bio">Bio: </label>
        <input name="bio"  value={bio} placeholder='A little bit about yourself' onChange= {(e) => setBio(e.target.value)}/>
  
        <label htmlFor="wealth">Wealth: </label>
        <input name="wealth" value={wealth} placeholder='Rich or Poor?' onChange= {(e) => setWealth(e.target.value)}/>

        <label htmlFor="gender">Gender: </label>
        <input name="gender" value={gender} placeholder='Lord, Lady, Non-Binary' onChange= {(e) => setGender(e.target.value)}/>
  
        <button type="submit">Join!</button>
  
      </form>
  
    );
}

export default Form;