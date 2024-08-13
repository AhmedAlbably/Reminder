import { Container} from "react-bootstrap";
import user from "./components/Data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import Actions from "./components/Actions";
import "./App.css";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(user); 

  const DeleteData = () => {
    setUserData([]);
  }

  const viewData = () => {
    setUserData(user);
  }
  return (
    <div className="font body-color">
      <Container className="py-5 container">
        <DatesCount user={userData} />
        <DatesList user={userData} />
        <Actions DeleteData={DeleteData} viewData={viewData}/>
      </Container>
    </div>
  );
}

export default App;
