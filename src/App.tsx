import Greet from "./Componenets/Greet";
import { Person } from "./Componenets/Person";
import { PersonList } from "./Componenets/PersonList";

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
    </>
  );
}

export default App;
