import React, { ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';

interface AmountProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}

export default function Amount(props: AmountProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    props.onChange(newValue);
  };

  return (
    <TextField
      id="standard-number"
      label="Amount"
      placeholder="How much was spent..."
      value={props.value}
      onChange={handleChange}
      type="number"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      margin="normal"
    />
  );
}
