import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

interface SelectProps {
  choices: string[];
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}

export default function Select(props: SelectProps) {
  return (
    <div>
      <InputLabel shrink htmlFor="age-native-label-placeholder">
        Type
      </InputLabel>
      <NativeSelect
        fullWidth
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
      >
        <option value={''} key={-1}>
          - None -
        </option>
        {props.choices.map((choice, index) => {
          return (
            <option value={choice} key={index}>
              {choice}
            </option>
          );
        })}
      </NativeSelect>
    </div>
  );
}
