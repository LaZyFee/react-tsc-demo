type PosritiveNumber = {
  value: number;
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = {
  value: number;
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type ZeroNumber = {
  value: number;
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps = PosritiveNumber | NegativeNumber | ZeroNumber;

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "+"} {isNegative && "-"} {isZero && "0"}
    </div>
  );
};
