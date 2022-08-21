import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

function InputField({ control, label, name, ...inputProps }) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      label={label}
      variant="outlined"
      size="small"
      fullWidth
      margin="normal"
      value={value || ""}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      inputProps={inputProps}
    />
  );
}

export default InputField;
