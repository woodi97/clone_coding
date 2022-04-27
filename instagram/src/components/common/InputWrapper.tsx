import React, { ChangeEventHandler, MouseEventHandler } from "react";

type Props = {
  type: "id" | "email" | "password";
  name: string;
  value: string | number;
  label: string;
  error?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
};

const InputWrapper = (props: Props) => {
  return (
    <div>
      <input />
    </div>
  );
};

export default InputWrapper;
