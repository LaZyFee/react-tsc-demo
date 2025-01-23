import { Name } from "./Person.Type";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <ul key={name.first}>
          <li>
            Hello {name.first} {name.last}
          </li>
        </ul>
      ))}
    </div>
  );
};
