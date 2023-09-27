import UserProvider from "./context/UserProvider";
import Routing from "./routes";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routing />
      </UserProvider>
    </div>
  );
}

export default App;
