import { useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import {
  InputField,
  RadioGroupField,
  SelectField,
} from "../../../components/FormFields";
import { useSelector } from "react-redux";
import { selectCityOptions } from "../../city/citySlice";

function StudentForm({ initialValues, onSubmit }) {
  const cityOptions = useSelector(selectCityOptions);

  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
  });

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box>
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

        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default StudentForm;
