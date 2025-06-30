import * as React from 'react';
import Input from '@mui/joy/Input';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

type FloatingLabelInputProps = {
  label: string;
  name: string;
  type?: string;
  value: any;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  error?: boolean;
  helperText?: string | false;
  min? : number;
  max? : number;
  step? : number;
};

export default function FloatingLabelInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  helperText,
  min,
  max,
  step
}: FloatingLabelInputProps) {

  return (
    <FormControl error={error} sx={{ my: 1 }}>
      <FormLabel>{label}</FormLabel>
      {type === 'number' ? (
        <Input
        name={name}
        type="number"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        sx={{ '--Input-minHeight': '56px', '--Input-radius': '6px' }}
        slotProps={{
          input: {
            min,
            max,
            step
          },
        }}
      />
      ) : (
    <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        sx={{ '--Input-minHeight': '56px', '--Input-radius': '6px' }}
      />
      )}
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}