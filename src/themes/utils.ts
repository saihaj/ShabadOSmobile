/**
 * Set Top and Bottom to given value.
 * Default: 'auto'
 */
export const my = ( value: number|string = 'auto' ) => ( {
  marginTop: value,
  marginBottom: value,
} )

/**
 * Set Left and Right margin to given value.
 * Default: 'auto'
 */
export const mx = ( value: number|string = 'auto' ) => ( {
  marginLeft: value,
  marginRight: value,
} )

/**
 * Set Left and Right padding to given value.
 * Default: 'auto'
 */
export const px = ( value: number|string = 'auto' ) => ( {
  paddingLeft: value,
  paddingRight: value,
} )

/**
 * Set Top and Bottom padding to given value.
 * Default: 'auto'
 */
export const py = ( value: number|string = 'auto' ) => ( {
  paddingTop: value,
  paddingBottom: value,
} )

