import React from "react";
import "../css/YouTubeForm.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
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

const YouTubeForm = () => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      className="youtubeForm"
    >
        <Form>
            <Field
                type="text"
                id="name"
                placeholder="Name"
                name="name"
            />
        <ErrorMessage name="name" />
        <Field
          type="email"
          id="email"
          placeholder="Email"
          name="email"
        />
        <ErrorMessage name="email" />
        <Field
          type="text"
          id="channel"
          placeholder="Channel"
          name="channel"
        />
        <ErrorMessage name="channel" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YouTubeForm;