import React, { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./Textarea.module.scss";
import { CustomStyle } from "@/app/types/customStyle";

interface TextareaProps
  extends InputHTMLAttributes<HTMLTextAreaElement>,
    CustomStyle {
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  showError?: { required: boolean; message?: string };
  validationParams?: any;
}
const Textarea = (props: TextareaProps) => {
  const {
    label,
    name,
    placeholder,
    className,
    required,
    validationParams = {},
    showError = {
      required: false,
      message: `Please fill the value of ${name || label} field`,
    },
    ...others
  } = props;
  const formContext = useFormContext();
  let register: any = () => {};
  if (formContext && name) {
    register = formContext.register;
  }

  return (
    <div className={`${styles.field} ${className ? className : ""}`}>
      {label && (
        <label htmlFor={label} className={required ? styles.required : ""}>
          {label}
        </label>
      )}
      <textarea
        name={name}
        className={styles["custom-input"]}
        placeholder={placeholder}
        {...register(name, {
          required: {
            value: required as boolean,
            message: `Please fill the value of ${label} field`,
          },
        })}
        {...others}
      />
      {showError.required && (
        <p className={styles.errorMessage}>{showError.message}</p>
      )}
    </div>
  );
};
Textarea.defaultProps = {
  placeholder: "",
};

export default Textarea;
