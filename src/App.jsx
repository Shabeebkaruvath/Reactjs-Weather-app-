import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <h3>Enter the city name</h3>
         
        <input type="text" name="city name" required/>
      </div>
      <div className="data">
        <div className="data1">
          <h3>City Name</h3>
          <h4>Temparature</h4>
          <h4>country</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
