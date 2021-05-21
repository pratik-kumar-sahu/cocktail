import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="leftContainer">
        <form className="leftContainer__search">
          <input
            className="leftContainer__search--inputBox"
            type="search"
            placeholder="Search cocktails"
          />
          <button className="leftContainer__search--btn">Submit</button>
        </form>
      </div>
      <div className="rightContainer"></div>
    </div>
  );
}

export default App;
