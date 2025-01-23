import { PersonProps } from "./Person.Type";

export const Person = (props: PersonProps) => {
  return (
    <div>
      <h2>
        Hello {props.name.first} {props.name.last}
      </h2>
    </div>
  );
};
