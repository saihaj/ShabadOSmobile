import React from 'react'
import { Switch, SwitchProps } from 'react-native'

import useToggle from '../hooks/use-toggle'
import Colours from '../themes/colours'

type ToggleProps = {
  /**
   * Invoked with the new value when the value changes.
   */
  onToggle: NonNullable<SwitchProps['onValueChange']>,
} & SwitchProps

const Toggle = ( { onToggle, ...props }:ToggleProps ) => {
  const { state, toggle } = useToggle( false )

  const onChange = () => {
    toggle()
    onToggle( state )
  }

  return (
    <Switch
      trackColor={{ false: Colours.DarkGray, true: Colours.Blue }}
      ios_backgroundColor={Colours.DarkGray}
      onValueChange={onChange}
      value={state}
      {...props}
    />
  )
}

export default Toggle
