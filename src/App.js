import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import seedColors from "./seedColors";
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { generatePalette } from "./colorHelpers"

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  };

  findPalette(id) {
    return this.state.palettes.find(palette => {
      return palette.id === id;
    });
  };

  deletePalette(id) {
    this.setState(old => ({
      palettes: old.palettes.filter(palette => palette.id !== id)
    }));
  };

  savePalette(newPalette) {
    this.setState(old => ({
      palettes: [...old.palettes, newPalette]
    }), this.syncLocalStorage);
  };

  syncLocalStorage() {
    // save palettes to local storage
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) =>
            <PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette} {...routeProps} />}
        />
        <Route
          exact
          path="/palette/new"
          render={(routeProps) =>
            <NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routeProps} />
          }
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) =>
            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
          }
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) =>
            <SingleColorPalette
              palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
              colorId={routeProps.match.params.colorId}
            />
          }
        />
        <Route
          render={(routeProps) =>
            <PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette} {...routeProps} />}
        />
      </Switch>
    );
  }
}

export default App;