import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import Palette from './Palette';
import PaletteList from './PaletteList';
import { generatePalette } from "./colorHelpers"

class App extends Component {
  findPalette(id) {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/"
            render={() => <PaletteList palettes={seedColors} />}
          />
          <Route exact path="/palette/:id"
            render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;