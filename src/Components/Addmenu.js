import React from "react";
import { useFormik } from 'formik';
import { addmenus } from '../schemas/menu';

const initialValues={
    days:"",
    lunch:"",
    breakfast:"",
    dinner:"",
  };


function Addmenu(){

    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema:addmenus,
        onSubmit:(values,action) => {
            console.log("🚀 ~ file: Addmenu.js:8 ~ Addmenu ~ values:", values);
            action.resetForm();
        },
      });

    return(
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
                    <label htmlFor="days" className="form-label">Day</label>
                    <select  value={values.days} onChange={handleChange} onBlur={handleBlur} id="days" className="form-select" name="days" aria-label="Default select example">
                    <option value="0">Open this select menu</option>
                    <option value="1">Sunday</option>
                    <option value="2">Monday</option>
                    <option value="3">Tuesday</option>
                    <option value="4">Wednesday</option>
                    <option value="5">Thursday</option>
                    <option value="6">Friday</option>
                    <option value="7">Saturday</option>
                    
                    </select>
                      
                    </div>
                    <div className="mb-3">
                      <label htmlFor="breafast" className="form-label">Breakfast</label>
                      <textarea autoComplete='off' value={values.lname} onChange={handleChange} onBlur={handleBlur} className="form-control" name="breakfast" id="breakfast"></textarea>
                      {errors.breakfast && touched.breakfast ? ( <p className="alert alert-danger" role="alert">{errors.breakfast}</p> ):null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lunch" className="form-label">Lunch</label>
                      <textarea autoComplete='off' value={values.lunch} onChange={handleChange} onBlur={handleBlur} className="form-control" name="lunch" id="lunch"></textarea>
                      
                      {errors.lunch && touched.lunch ? ( <p className="alert alert-danger" role="alert">{errors.lunch}</p> ):null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="dinner" className="form-label">Dinner</label>
                      <textarea autoComplete='off' value={values.dinner} onChange={handleChange} onBlur={handleBlur} className="form-control" name="dinner"  id="dinner"></textarea>
                      
                      {errors.dinner && touched.dinner ? ( <p className="alert alert-danger" role="alert">{errors.dinner}</p> ):null}
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
};

export default Addmenu;