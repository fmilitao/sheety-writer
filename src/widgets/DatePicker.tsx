import React from 'react';
import TextField from '@material-ui/core/TextField';

interface DatePickerProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}

export default function DatePicker(props: DatePickerProps) {
  const handleChange = (event: any) => {
    const newValue = event.target.value;
    props.onChange(newValue);
  };

  return (
    <TextField
      id="date"
      label="Date"
      type="date"
      fullWidth
      value={props.value}
      onChange={handleChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
