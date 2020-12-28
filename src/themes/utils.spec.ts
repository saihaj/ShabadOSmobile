import { px, py, mx, my } from './utils'

describe( 'Styling Utilities', () => {
  it( 'should have paddingBottom and paddingTop set to auto', () => {
    expect( py() ).toEqual( { paddingTop: 'auto', paddingBottom: 'auto' } )
  } )

  it( 'should have paddingBottom and paddingTop set to 10', () => {
    expect( py( 10 ) ).toEqual( { paddingTop: 10, paddingBottom: 10 } )
  } )

  it( 'should have paddingLeft and paddingRight set to auto', () => {
    expect( px() ).toEqual( { paddingLeft: 'auto', paddingRight: 'auto' } )
  } )

  it( 'should have paddingLeft and paddingRight set to 10', () => {
    expect( px( 10 ) ).toEqual( { paddingLeft: 10, paddingRight: 10 } )
  } )

  it( 'should have marginLeft and marginRight set to auto', () => {
    expect( mx() ).toEqual( { marginLeft: 'auto', marginRight: 'auto' } )
  } )

  it( 'should have marginLeft and marginRight set to 10', () => {
    expect( mx( 10 ) ).toEqual( { marginLeft: 10, marginRight: 10 } )
  } )

  it( 'should have marginTop and marginBottom set to auto', () => {
    expect( my() ).toEqual( { marginTop: 'auto', marginBottom: 'auto' } )
  } )

  it( 'should have marginTop and marginBottom set to 10', () => {
    expect( my( 10 ) ).toEqual( { marginTop: 10, marginBottom: 10 } )
  } )
} )
