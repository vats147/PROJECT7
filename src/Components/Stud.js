// Example Stud.js
import React from 'react';
import { useFormik } from 'formik';
import { signupschema } from '../schemas';
import axios from "axios";
const initialValues={
  fname:"",
  lname:"",
  email:"",
  room:"",
  cont:"",
  htype:"",
  pass:"",
  c_pass:"",
};

function Stud() {
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema:signupschema,
    onSubmit:(values,action) => {
      axios
      .post("http://localhost:8080/hreg", values)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  
        console.log("🚀 ~ file: Stud.js:8 ~ Stud ~ values:", values);
        action.resetForm();
    },
  });
  //console.log("🚀 ~ file: Stud.js:26 ~ Stud ~ errors:", errors)
  // console.log("🚀 ~ file: Stud.js:22 ~ Stud ~ Formik:", Formik);
return (
   <>
     <div className="container-fluid">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-4">Hosteller Registration Form</h5>
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="textfname" className="form-label">First Name</label>
                      <input type="text" autoComplete='off' value={values.fname} onChange={handleChange} onBlur={handleBlur} className="form-control half-width-input" name="fname"   id="textfname"/>
                     {errors.fname && touched.fname ? ( <p className="alert alert-danger" role="alert">{errors.fname}</p> ):null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="textlname" className="form-label">Last Name</label>
                      <input type="text" autoComplete='off' value={values.lname} onChange={handleChange} onBlur={handleBlur} className="form-control" name="lname" id="textlname"/>
                      {errors.lname && touched.lname ? ( <p className="alert alert-danger" role="alert">{errors.lname}</p> ):null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="textEmail" className="form-label">Email address</label>
                      <input type="email" autoComplete='off' value={values.email} onChange={handleChange} onBlur={handleBlur} className="form-control" name="email" id="textEmail" aria-describedby="Memail"/>
                      <div id="Memail" className="form-text">We'll never share your email with anyone else.</div>
                      {errors.email && touched.email ? ( <p className="alert alert-danger" role="alert">{errors.email}</p> ):null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="textRoomNO" className="form-label">Room Number</label>
                      <input type="text" autoComplete='off' value={values.room} onChange={handleChange} onBlur={handleBlur} className="form-control" name="room"  id="textRoomNO" aria-describedby="roomno"/>
                      <div id="roomno" className="form-text">ROom Number Format A-16.</div>
                      {errors.room && touched.room ? ( <p className="alert alert-danger" role="alert">{errors.room}</p> ):null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="textcont" className="form-label">Contact Number</label>
                      <input type="text" autoComplete='off' value={values.cont} onChange={handleChange} onBlur={handleBlur} name="cont" className="form-control" id="textcont"/>
                      {errors.cont && touched.cont ? ( <p className="alert alert-danger" role="alert">{errors.cont}</p> ):null}
                      
                    </div>
                    <div className="mb-3">
                    <label htmlFor="hosttype" className="form-label">Hostel Type</label>
                    <select  value={values.htype} onChange={handleChange} onBlur={handleBlur} className="form-select" name="htype" aria-label="Default select example">
                    <option value="0">Open this select menu</option>
                    <option value="girls">Pushpam Girls Hostel</option>
                    <option value="boys">Kabir Boys Hostel</option>
                    
                    </select>
                      
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" autoComplete='off' value={values.pass} onChange={handleChange} onBlur={handleBlur} className="form-control" name="pass" id="password" aria-describedby="checkpass"/>
                      <div id="checkpass" className="form-text">Password Must Contain only 6 characters with special characters and number. </div>
                      {errors.pass && touched.pass ? ( <p className="alert alert-danger" role="alert">{errors.pass}</p> ):null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="c_password" className="form-label">Confirm Password</label>
                      <input type="password" autoComplete='off' className="form-control" value={values.c_pass} onChange={handleChange} onBlur={handleBlur} name="c_pass" id="c_password"/>
                      {errors.c_pass && touched.c_pass ? ( <p className="alert alert-danger" role="alert">{errors.c_pass}</p> ):null}
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
        </div>
   </>
  );
}
export default Stud;