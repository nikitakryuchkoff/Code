import { FC } from "react";
import { WarningIcon } from "../Icons";
import styled from "styled-components";

type ErrorComponentProps = {
  text: string;
};

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: white;
  font-weight: 500;
  margin-right: 10px;
  background: linear-gradient(90deg, #0f1318 0%, #0a0e12 100%);
  justify-content: center;
  gap: 13px;
`;

const ErrorComponent: FC<ErrorComponentProps> = ({ text = "Ошибка" }) => {
  return (
    <ErrorContainer>
      <WarningIcon />
      <span>{text}</span>
    </ErrorContainer>
  );
};

export default ErrorComponent;
