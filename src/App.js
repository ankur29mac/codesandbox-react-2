//Approach-2
import React from "react";
import "./styles.css";
import Ninjas from "./Ninjas/Ninjasv3";
import NinjaForm from "./NinjaForm";

class App extends React.Component {
  state = {
    ninjas: [
      { name: "Ryu", age: "30", belt: "Black", id: "1" },
      { name: "Yoshi", age: "35", belt: "Red", id: "2" },
      { name: "Crystal", age: "33", belt: "Purple", id: "3" }
    ]
  };

  addNinja = (newNinja) => {
    newNinja.id = `${Math.floor(Math.random() * 10 + 4)}`;
    this.setState({
      ninjas: [...this.state.ninjas, newNinja]
    });
  };

  deleteNinja = (id) => {
    let filterArr = this.state.ninjas.filter((ninja) => {
      return id !== ninja.id;
    });

    this.setState({
      ninjas: filterArr
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello, React</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <NinjaForm addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;

//Approach-1
/*
import React from "react";
import "./styles.css";
import Ninjas from "./Ninjas/Ninjas";

class App extends React.Component {
  state = {
    ninjas: [
      { name: "Ryu", age: "30", belt: "Black", id: "1" },
      { name: "Yoshi", age: "35", belt: "Red", id: "2" },
      { name: "Crystal", age: "33", belt: "Purple", id: "3" }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hello, React</h1>

        {this.state.ninjas.map((ninja, index) => {
          return (
            <div className="ninja-list" key={this.state.ninjas[index].id}>
              <Ninjas
                name={this.state.ninjas[index].name}
                age={this.state.ninjas[index].age}
                belt={this.state.ninjas[index].belt}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
*/
