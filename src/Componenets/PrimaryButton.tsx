type PrimaryButtonProps = {
  children: string;
};
export const PrimaryButton = (props: PrimaryButtonProps) => {
  return <div className="btn">{props.children}</div>;
};
