import React from "react";
import "../css/YouTubeForm.scss";
import { useFormik } from "formik";
import * as Yup from 'yup';

const initialValues = {
    name: "",
    email: "",
    channel: "",
};

const onSubmit = values => {
    console.log(values);
};

const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid email fromat").required('Required!'),
    channel: Yup.string().required('Required!'),
})

const OldYouTubeForm = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
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

export default OldYouTubeForm;
