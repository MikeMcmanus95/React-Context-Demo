import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      isLightTheme: true,
      light: { mainColor: '#555', ui: '#ddd', bg: '#eee' },
      dark: { mainColor: '#ddd', ui: '#333', bg: '#555' },
    };
  }

  toggleTheme = () => {
    this.setState(prevState => ({ isLightTheme: !prevState.isLightTheme }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
