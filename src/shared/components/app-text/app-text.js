import React from 'react'
import { Text } from 'react-native-elements'
import { THEME } from '../../../styles/theme'

const AppText = ({
  text,
  style,
  color,
  size,
  children
}) => {
  return (
    <Text
      style={{
        fontFamily: THEME.fontName,
        color: color || THEME.colors.fonts.primary,
        fontSize: size,
        ...style
      }}
    >
      {text || children}
    </Text>
  )
}

export default AppText
