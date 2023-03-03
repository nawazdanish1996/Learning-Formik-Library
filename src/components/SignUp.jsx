import React from 'react';
import "../css/SignUp.scss";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const initialValue = {
    name: '',
    email: '',
    password: '',
    gender: '',
    termsAndConditions: false,
    education: '',
};
const onSubmit = (val, {resetForm})=>{
    console.log("values", val);
    resetForm()
};
const validationSchema = Yup.object().shape({
    name: Yup.string().min(4, "Too short Name").max(25, "Too Long Name").required("Name is a required field"),
    email: Yup.string().email("Invalid email format").required("Email is a required field"),
    password: Yup.string().min(6, "Too short Password").max(10, "Too Long Password").required("Password is a required field"),
    gender: Yup.string().required("Gender is a required field"),
    termsAndConditions: Yup.boolean().oneOf([true], "Please select the terms and conditions."),
    education: Yup.string().required("Edication is a required field"),
});

const SignUp = () => {
  return (
    <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
        {(formik)=>(
            <Form>
                <h6>Form Validation with Formik and Yup library.</h6>
                {console.log(formik)}
                <div className="form-div">
                    <Field type='text' name="name" placeholder="Enter Your Name" />
                    <p className="text-danger">
                        <ErrorMessage name='name' />
                    </p>
                </div>

                <div className="form-div">
                    <Field type="email" name="email" placeholder='Enter Your Email' />
                    <p className="text-danger">
                        <ErrorMessage name='email' />
                    </p>
                </div>

                <div className="form-div">
                    <Field type="text" name='password' placeholder="Enter Your Password" />
                    <p className="text-danger">
                        <ErrorMessage name='password' />
                    </p>
                </div>

                <div className="form-div">
                    <label htmlFor="gender">Gender</label>
                    <Field component='select' name="gender" id="gender" >
                        <option value='' disabled selected>Please select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Field>
                    <p className="text-danger">
                        <ErrorMessage name='gender' />
                    </p>
                </div>

                <div className="form-div">
                    <label className='form-inline'>
                        <Field type="checkbox" name="termsAndConditions"  />
                        I accept all the terms and conditions.
                    </label>
                    <p className="text-danger">
                        <ErrorMessage name='termsAndConditions' />
                    </p>
                </div>

                <div className="form-div">
                    <label htmlFor="school">
                        <Field value='school' type="radio" name="education" id="school" />
                        School
                    </label>
                    <label htmlFor="college">
                        <Field value='college' type="radio" name="education" id="college" />
                        College
                    </label>
                    <label htmlFor="university">
                        <Field value='university' type="radio" name="education" id="university" />
                        University
                    </label>
                    <p className="text-danger">
                        <ErrorMessage name='education' />
                    </p>
                </div>

                <button type="submit">Sign Up</button>
                <button type="reset">Reset</button>
            </Form>
        )}
    </Formik>
  )
}

export default SignUp