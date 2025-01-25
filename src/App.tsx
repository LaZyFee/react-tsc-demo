import { LoggedIn } from "./Componenets/Authentication/LoggedIn";
import { Button } from "./Componenets/Button";
import { Counter } from "./Componenets/Counter";
import Greet from "./Componenets/Greet";
import { Input } from "./Componenets/Input";
import { NodeType } from "./Componenets/NodeType";
import { Person } from "./Componenets/Person";
import { PersonList } from "./Componenets/PersonList";
import { PrimaryButton } from "./Componenets/PrimaryButton";
import { User } from "./Componenets/State/User";
import { Status } from "./Componenets/Status";
function App() {
  const PersonName = {
    first: "Rohit",
    last: "Sharma",
  };

  const nameList = [
    {
      first: "Sarah",
      last: "Sayma",
    },
    {
      first: "Asma",
      last: "Priya",
    },
    {
      first: "Pillow",
      last: "Fluff",
    },
  ];

  return (
    <>
      <Greet name="Sarah" countValue={10} isLoggedIn={true} />
      <Person name={PersonName} />
      <PersonList names={nameList} />
      <Status Status="loading" />
      <NodeType>
        <PrimaryButton>Wave</PrimaryButton>
      </NodeType>
      <Button
        onClick={(event, id) => {
          console.log("Clicked", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <LoggedIn />
      <User />
      <Counter />
    </>
  );
}

export default App;
