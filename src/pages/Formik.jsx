import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

const Formik = () => {
    let formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },

        onSubmit: (values) => {
            console.log(values);
        },

        validationSchema: yup.object({
            firstName: yup.string('Enter your first name').min(3, 'Minimum 3 characters').max(15, 'Maximum 15 characters').required('First name is required'),
            lastName: yup.string('Enter your last name').min(3, 'Minimum 3 characters').max(15, 'Maximum 15 characters').required('Last name is required'),
            email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
            password: yup.string('Enter your password').required('Password is required')
        })
    })


    // console.log(formik.values);
    // console.log(formik.touched);
    console.log(formik.errors);
    
    
    

    return (
        <>
            <h1>Form component</h1>
            <input type="text" name='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur} /> {formik.touched.firstName && formik.errors.firstName ? <tt>{formik.errors.firstName}</tt> :'' } 
            <input type="text" name='lastName' onChange={formik.handleChange} onBlur={formik.handleBlur}/> {formik.touched.lastName && formik.errors.lastName ? <tt>{formik.errors.lastName}</tt> : ''}
            <input type="email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/> {formik.touched.email && formik.errors.email ? <tt>{formik.errors.email}</tt>:''}
            <input type="password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/> {formik.touched.password && formik.errors.password ? <tt>{formik.errors.password}</tt>:''}
            <button type='button' onClick={formik.handleSubmit}>Submit</button>
        </>
    )
}

export default Formik