import * as Yup from "yup";

export const addmenus=Yup.object({
    breakfast:Yup.string().min(3,"Breakfast Must Be Atleast 2 Characters").max(255).matches(/\b[A-Z][a-zA-Z]*,(?:\s+[A-Z][a-zA-Z]*,)*\s+[A-Z][a-zA-Z]*\.$/, 'Invalid Input Format').required('Breakfast is required'),
    lunch:Yup.string().min(3,"Lunch Must Be Atleast 2 Characters").max(255).matches(/\b[A-Z][a-zA-Z]*,(?:\s+[A-Z][a-zA-Z]*,)*\s+[A-Z][a-zA-Z]*\.$/, 'Invalid Input Format').required("Lunch  is required"),
    dinner:Yup.string().min(3,"Dinner Must Be Atleast 2 Characters").max(255).matches(/\b[A-Z][a-zA-Z]*,(?:\s+[A-Z][a-zA-Z]*,)*\s+[A-Z][a-zA-Z]*\.$/, 'Invalid Input Format').required("Dinner  is required"),
})