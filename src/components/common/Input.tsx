import React from 'react';
import { TextField } from '@mui/material';


interface InputProps {
  field: any;
  label: string;
  type: "text" | "password" | "email" | "number";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  errors: {
    [key: string]: {
      message?: string;
    };
  };
}

const Input = ({ field, errors }: InputProps) => {
  return (
    <div>
      <TextField
        {...field}
        label="Password"
        type="password"
        fullWidth
        error={!!errors.password}
        helperText={errors.password?.message}
      />
    </div>
  );
}

export default Input
