import React from "react";
import "../css/YouTubeForm.scss";
import { useFormik } from "formik";

const initialValues = {
    name: "",
    email: "",
    channel: "",
};

const onSubmit = values => {
    console.log(values);
};

const validate = values => {
    // values.name values.email, values.channel
    // errors.name errors.email errors.channnel
    // errors.name = 'This field is required'
    let errors = {}
    if(!values.name){
        errors.name = "Required"
    }else if(values.name.length < 4){
        errors.name = "Name char should be greater than four char"
    }
    // else if(values.name === !isNaN){
    //     errors.name = "Name should be String"
    // }
    
    if(!values.email){
        errors.email = "Required"
    }else if(!/^[A-Z0-9._%]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email format'
    }

    if(!values.channel){
        errors.channel = "Required"
    }
    return errors
}

const YouTubeForm = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

//   console.log(formik.errors);
  console.log(formik.touched);

  return (
    <div className="youtubeForm">
        <form onSubmit={formik.handleSubmit}>
            <input
                onChange={formik.handleChange}
                value={formik.values.name}
                // Visited Fields
                onBlur={formik.handleBlur}
                type="text"
                id="name"
                placeholder="Name"
            />
        {
            formik.touched.name && 
            <p>{formik.errors.name ? formik.errors.name : "" }</p>
        }
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          type="email"
          id="email"
          placeholder="Email"
        />
        {
            formik.touched.email && 
            <p>{formik.errors.email ? formik.errors.email : "" }</p>
        }
        <input
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
          type="text"
          id="channel"
          placeholder="Channel"
        />
        {
            formik.touched.channel &&
            <p>{formik.errors.channel ? formik.errors.channel : "" }</p>
        }
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YouTubeForm;
