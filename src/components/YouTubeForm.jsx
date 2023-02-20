import React, { useEffect } from 'react';
import "../css/YouTubeForm.scss";
import { useFormik } from 'formik';

const YouTubeForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        }
    })

    console.log(formik.values);

    const submitHandle = () =>{
        localStorage.setItem("data", formik.values.name);
    }
    
    useEffect(()=>{
        let d = new Date();
        let hr = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        console.log(hr < 10 ? "0"+hr : hr);
        console.log(min < 10 ? "0"+min : min);
        console.log(sec < 10 ? "0"+sec : sec);
    })

  return (
    <div className='youtubeForm'>
        <form>
            <input onChange={formik.handleChange} value={formik.values.name} type="text" id="name" placeholder='Name' />
            <br />
            <input onChange={formik.handleChange} value={formik.values.email} type="email" id="email" placeholder='Email' />
            <br />
            <input onChange={formik.handleChange} value={formik.values.channel} type="text" id="channel" placeholder='Channel' />
            <br />
            <button onClick={submitHandle} type="submit">Submit</button>
        </form>
    </div>
  )
}

export default YouTubeForm;