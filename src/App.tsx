import { Private } from "./Componenets/Auth/Private";
import { Profile } from "./Componenets/Auth/Profile";
import { LoggedIn } from "./Componenets/Authentication/LoggedIn";
import { Button } from "./Componenets/Button";
import { Box } from "./Componenets/Context/Box";
import { ThemeContextProvider } from "./Componenets/Context/ThemeProvider";
import { User2 } from "./Componenets/Context/User2";
import { UserProvider } from "./Componenets/Context/UserProvider";
import { Counter } from "./Componenets/Counter";
import { List } from "./Componenets/Generics/List";
import Greet from "./Componenets/Greet";
import { Input } from "./Componenets/Input";
import { NodeType } from "./Componenets/NodeType";
import { Person } from "./Componenets/Person";
import { PersonList } from "./Componenets/PersonList";
import { PrimaryButton } from "./Componenets/PrimaryButton";
import DomRef from "./Componenets/Ref/DomRef";
import MutableRef from "./Componenets/Ref/MutableRef";
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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserProvider>
        <User2 />
      </UserProvider>
      <DomRef />
      <MutableRef />
      <Private isLoggedIn={true} component={Profile} />
      <List
        items={["a", "b", "c"]}
        onClick={(item) => console.log(item)}
        renderItem={(item) => item} // Strings can be directly rendered
      />

      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
        renderItem={(item) => item} // Numbers can be directly rendered
      />

      <List
        items={[
          { first: "Rohit", last: "Sharma" },
          { first: "Asma", last: "Priya" },
          { first: "Pillow", last: "Fluff" },
        ]}
        onClick={(item) => console.log(item)}
        renderItem={(item) => `${item.first} ${item.last}`} // Convert object to string
      />
    </>
  );
}

export default App;
