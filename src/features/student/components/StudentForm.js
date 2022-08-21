import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Box, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import {
  InputField,
  RadioGroupField,
  SelectField,
} from "../../../components/FormFields";
import { history } from "../../../utils";
import { selectCityOptions } from "../../city/citySlice";

function StudentForm({ initialValues, onSubmit }) {
  const cityOptions = useSelector(selectCityOptions);
  const [error, setError] = useState();

  const schema = yup
    .object({
      name: yup
        .string()
        .required("Name is a required field")
        .test("two-word", "Please enter at least two words", (value) => {
          if (!value) return true;
          return value.split(" ").filter((x) => !!x).length >= 2;
        }),
      age: yup
        .number()
        .positive("Please enter a positive number")
        .integer("Please enter an integer")
        .min(18, "Min is 18")
        .max(60, "Max is 60")
        .required("Age is a required field")
        .typeError("Age is a required field"),
      gender: yup
        .string()
        .required("Please select gender")
        .typeError("Gender is a required field")
        .oneOf(["male", "female"], "Please select either male or female"),
      mark: yup
        .number()
        .min(0, "Min is 0")
        .max(10, "Max is 10")
        .required("Mark is a required field")
        .typeError("Mark is a required field"),
      city: yup
        .string()
        .required("City is a required field")
        .typeError("City is a required field"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (data) => {
    try {
      setError("");
      await onSubmit(data);

      toast.success("Save success!");

      history.push("/admin/students");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box width={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField
          label="Full Name"
          name="name"
          control={control}
        ></InputField>

        <RadioGroupField
          name="gender"
          control={control}
          label="Gender"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
        />
        <InputField
          label="Age"
          name="age"
          control={control}
          type="number"
        ></InputField>

        <InputField
          label="Mark"
          name="mark"
          control={control}
          type="number"
        ></InputField>

        <SelectField
          label="City"
          name="city"
          control={control}
          options={cityOptions}
        />
        {error && (
          <Alert severity="error">This is an error alert — check it out!</Alert>
        )}
        <Box mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            {isSubmitting && <CircularProgress color="primary" size={16} />}
            &nbsp;Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default StudentForm;
