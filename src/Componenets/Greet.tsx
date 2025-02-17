type GreetProps = {
  name: string;
  countValue?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { countValue = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <>
          <h2>Welcome {props.name}!</h2>
          <p>The money left {countValue}💸</p>
        </>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  );
};

export default Greet;
