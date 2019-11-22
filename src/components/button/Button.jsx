import React from "react";
import { ButtonContainer } from "../../styled-components/CustomButton";

const Button = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
