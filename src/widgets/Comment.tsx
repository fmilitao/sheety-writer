import React from 'react';
import TextField from '@material-ui/core/TextField';

interface CommentProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}

export default function Comment(props: CommentProps) {
  const handleChange = (event: any) => {
    const newValue = event.target.value;
    props.onChange(newValue);
  };

  return (
    <TextField
      id="standard-full-width"
      label="Comment"
      value={props.value}
      onChange={handleChange}
      type="text"
      placeholder="What you spent money on..."
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
