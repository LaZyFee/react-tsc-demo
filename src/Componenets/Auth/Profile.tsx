export type ProfileProps = {
  name: string;
};

export const Profile = ({ name }: ProfileProps) => {
  return (
    <div>
      <h2> Profile Component - UserName is: {name}</h2>
    </div>
  );
};
