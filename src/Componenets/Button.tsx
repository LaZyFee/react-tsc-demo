type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button className="btn" onClick={(event) => props.onClick(event, 1)}>
      Click Me
    </button>
  );
};
