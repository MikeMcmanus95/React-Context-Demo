import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.mainColor, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>Book 1</li>
        <li style={{ background: theme.ui }}>Book 2</li>
        <li style={{ background: theme.ui }}>Book 3</li>
      </ul>
    </div>
  );
};

export default BookList;
