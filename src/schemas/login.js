import * as Yup from "yup";

export const signupschema=Yup.object({
    
    cont:Yup.string().matches(/^[789]\d{9}$/, 'Invalid Indian contact number').required('Contact number is required'),
    pass: Yup.string().matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};:'",.<>?])[A-Za-z\d!@#$%^&*()_+[\]{};:'",.<>?]{8,}$/,
        'Invalid password format'
      ).required('Password is required'),
    
})