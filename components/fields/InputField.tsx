import { FieldProps } from "formik";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const inputField = ({ field, form: _, ...props }: FieldProps & InputProps) => {
  return (
  <div>
  <input {...field} {...props} />
  </div>
  )
};

export default inputField;
