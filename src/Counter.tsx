import * as React from 'react';

interface ICounterProps {
  label?: string;
  count?: number;
  onCounterIncrease: (isShift: boolean) => void;
}

const Counter: React.FunctionComponent<ICounterProps> = ({
  label = 'Count',
  count,
  onCounterIncrease,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    onCounterIncrease(event.shiftKey);
  };

  return (
    <div className="counter" onClick={handleClick}>
      <label>{label}</label>
      <span>{count}</span>
    </div>
  );
};

export default Counter;
