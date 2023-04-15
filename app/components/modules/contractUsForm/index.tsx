import React, { useState } from "react";
import Combobox from "../../elements/comboBox/Combobox.component";
import Option from "../../../types/industryOptionType";
import {
  useForm,
  FormProvider,
  useFormContext,
  SubmitHandler,
} from "react-hook-form";
import Textfield from "../../elements/textField/Textfield.component";
import Textarea from "../../elements/textArea/Textarea.component";
import submitDataToZohoForms from "@/app/api/submitFormToZoho";
import SubmitDataToZohoForms from "@/app/types/submitDataToZohoFormsType";

const industryOptions: Option[] = [
  {
    label: "Government",
    value: "Government",
  },

  {
    label: "Insurer",
    value: "Insurer",
  },
  {
    label: "Non-profit",
    value: "Non-profit",
  },
  {
    label: "Food Retailer",
    value: "Food Retailer",
  },
  {
    label: "Health System",
    value: "Health System",
  },
];

interface FormInputs {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  statement: string;
  website: string;
}

const ContractUsForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const methods = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
    const arrangeData: SubmitDataToZohoForms[] = Object.entries(data)?.map(
      ([key, value]) => ({ name: key, value: value || "" })
    );
    try {
      const result = await submitDataToZohoForms(arrangeData);
      console.log(result);

      if (result.Status === "Success") {
        console.log(result);
        setSuccess(true);
        setError(null);
      } else {
        console.log(result);
        setSuccess(false);
        setError(result.Message);
      }
    } catch (error: any) {
      console.log(error);
      setSuccess(false);
      setError(error.message);
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = methods;
  console.log(errors);

  return (
    <>
      <h1 className="padding_bottom--20 padding_top--20"> Talk with us</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Combobox
            name="industry"
            label="Industry"
            options={industryOptions}
          />
          <div className="row padding_top--20 padding_bottom--20">
            <div className="col-lg-6-fluid ">
              <Textfield
                name="firstName"
                required
                label="First Name"
                showError={{
                  required: errors["firstName"] ? true : false,
                  message: `Please fill the value of first name field`,
                }}
              />
            </div>
            <div className="col-lg-6-fluid ">
              <Textfield
                name="lastName"
                required
                label="Last Name"
                showError={{
                  required: errors["lastName"] ? true : false,
                  message: `Please fill the value of last name field`,
                }}
              />
            </div>
          </div>
          <Textfield
            name="email"
            type="email"
            required
            label="Email"
            validationParams={{
              pattern: {
                value:
                  /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                message: "Enter valid email",
              },
            }}
            showError={{
              required: errors["email"] ? true : false,
              message: errors["email"]?.message as string,
            }}
          />
          <Textfield
            name="phone"
            type="number"
            required
            label="Phone"
            validationParams={{
              pattern: {
                value: /^(?:\+1|1)?(?:[\s.-]*\d){10}$/,
                message: "Enter valid phone number",
              },
            }}
            showError={{
              required: errors["phone"] ? true : false,
              message: errors["phone"]?.message as string,
            }}
          />
          <Textfield
            name="website"
            label="Website"
            className="padding_bottom--20"
          />
          <Textarea
            name="statement"
            label="What is your program or initiative problem statement?"
            required
            showError={{
              required: errors["statement"] ? true : false,
              message: `Please fill the value of statement area`,
            }}
          />

          <button className="btn ptn-primary margin-top-20">Submit</button>
        </form>
      </FormProvider>
    </>
  );
};

export default ContractUsForm;
