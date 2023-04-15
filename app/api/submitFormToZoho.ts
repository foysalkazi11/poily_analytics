import SubmitDataToZohoForms from "../types/submitDataToZohoFormsType";

export default async function submitDataToZohoForms(
  data: SubmitDataToZohoForms[]
) {
  const url =
    "https://forms.zohopublic.com/poilyportal/form/TalkwithUs/formperma/3-X_21fYWFUKEIzJ3UJsZlwcRnizqDL6Bn2sGSv7ek4/htmlRecords/submit";
  const formData = new FormData();

  // Add your form data to the formData object
  data.forEach((field) => {
    formData.append(field.name, field.value);
  });

  // Send the form data to the Zoho Forms API endpoint
  const response = await fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  });
  console.log(response);
  const result = await response.json();
  return result;
}
