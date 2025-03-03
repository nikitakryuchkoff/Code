import "./InputControl.css";
import { SearchIcon } from "../Icons";
import { FC } from "react";

type TInputControlProps = {
  testCount: number;
  onChange: (value: string) => void;
};

const InputControl: FC<TInputControlProps> = ({
  testCount,
  onChange,
  value,
}) => {
  return (
    <div className="input-wrapper">
      <div className="input-icon">
        <SearchIcon />
      </div>
      <input
        type="text"
        className="styled-input"
        placeholder="What test are you looking for?"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <div className="input-side-text">{testCount} tests</div>
    </div>
  );
};

export default InputControl;
