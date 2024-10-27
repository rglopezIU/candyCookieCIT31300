import './App.css';
import Header from "./Header.js";
import CookieList from "./CandyList";

function App() {
  const headingTitle = "Chocolate Candy Boxes";
  return (
    <div className="App">
        <Header headingText = {headingTitle}/>
        <CookieList />
    </div>
  );
}

export default App;
