import { FC } from "react";
import { RefreshIcon } from "../Icons";
import styled from "styled-components";

const CustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e53935;
  color: white;
  border: none;
  border-radius: 6px;
  gap: 7px;
  cursor: pointer;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.1s ease;
  height: 100%;
  font-family: Inter, sans-serif !important;
  font-weight: 700;
  font-size: 18px;
  padding: 17px 40px;
  &:hover {
    background-color: rgba(160, 17, 49, 0.75);
  }

  &:active {
    background: #a01131;
  }

  &:disabled {
    background: #701328;
  }
`;

type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <CustomButton onClick={onClick} disabled={disabled}>
      {text}
      <RefreshIcon />
    </CustomButton>
  );
};

export default Button;
