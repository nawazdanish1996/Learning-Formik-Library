import React from 'react';
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

    console.log(formik);

  return (
    <div className='youtubeForm'>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder='Name' />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder='Email' />
            </div>

            <div>
                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" placeholder='Channel' />
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default YouTubeForm;