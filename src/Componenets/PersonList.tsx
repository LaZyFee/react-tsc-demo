type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <ul>
          <li>
            Hello {name.first} {name.last}
          </li>
        </ul>
      ))}
    </div>
  );
};
