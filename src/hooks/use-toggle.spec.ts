import { act, renderHook } from '@testing-library/react-hooks'

import useToggle from './use-toggle'

describe( 'useToggle()', () => {
  it( 'should be initialized to false', () => {
    const { result } = renderHook( () => useToggle( false ) )
    expect( result.current.state ).toBe( false )
  } )

  it( 'should toggle to true', () => {
    const { result } = renderHook( () => useToggle( false ) )

    // eslint-disable-next-line no-void
    void act( () => result.current.toggle() )
    expect( result.current.state ).toBe( true )
  } )
} )
