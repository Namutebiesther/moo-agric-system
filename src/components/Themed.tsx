import React from 'react';
import {
  View as DefaultView,
  Text as DefaultText,
  ViewStyle,
  TextStyle,
} from 'react-native';

// Define the available themes
type Theme = 'light' | 'dark';

// Define the available text types
type TextType = 'regular' | 'medium' | 'bold';

// Interface for View component props
interface ViewProps {
  children: React.ReactNode;
  theme?: Theme;
  style?: ViewStyle; // Allow custom styles for View
}

// Interface for Text component props
interface TextProps {
  children: React.ReactNode;
  type?: TextType; // Specify the text type (regular, medium, bold, etc.)
  style?: TextStyle; // Allow custom styles for Text
}

// View component
const View: React.FC<ViewProps> = ({children, theme = 'light', style}) => {
  // Define the default view style based on the theme
  const defaultViewStyle: ViewStyle = {
    backgroundColor: theme === 'dark' ? 'black' : 'white-smoke',
    flex: 1,
  };

  // Merge the default style with the provided custom style
  const mergedStyle: ViewStyle = {...defaultViewStyle, ...style};

  return <DefaultView style={mergedStyle}>{children}</DefaultView>;
};

// Text component with Lato font
const Text: React.FC<TextProps> = ({children, type = 'regular', style}) => {
  // Define the default text style with Lato font based on the specified type
  const defaultTextStyle: TextStyle = {
    fontFamily:
      type === 'bold'
        ? 'Lato-Bold'
        : type === 'medium'
        ? 'Lato-Medium'
        : 'Lato-Regular',
    fontSize: type === 'bold' ? 18 : type === 'medium' ? 16 : 14, // Set static font sizes
    color: 'black',
  };

  // Merge the default style with the provided custom style
  const mergedStyle: TextStyle = {...defaultTextStyle, ...style};

  return <DefaultText style={mergedStyle}>{children}</DefaultText>;
};

export {View, Text};
