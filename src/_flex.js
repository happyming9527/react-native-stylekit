let column = { flexDirection: 'column', flexWrap: 'nowrap' }
let row = { flexDirection: 'row', flexWrap: 'wrap' }

export default {
  // ====================================================
  //  Flex Componets
  // ====================================================

  column: column,
  row: row,

  // ====================================================
  // Positioning for Flex Items
  // ====================================================

  // Columns & Rows need reversed styles to create the same effect
  center: { alignItems: 'center', justifyContent: 'center' },
  topLeft: { alignItems: 'flex-start', justifyContent: 'flex-start' },
  bottomRight: { alignItems: 'flex-end', justifyContent: 'flex-end' },

  columnTopCenter: { ...column, flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'flex-start' },
  columnTopRight: { ...column, flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'flex-end', justifyContent: 'flex-start' },
  columnCenterLeft: { ...column, flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'flex-start', justifyContent: 'center' },
  columnCenterRight: { ...column, flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'flex-end', justifyContent: 'center' },
  columnBottomLeft: { ...column, flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'flex-start', justifyContent: 'flex-end' },
  columnBottomCenter: { ...column, flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'flex-end' },

  rowTopCenter: { ...row, alignItems: 'flex-start', justifyContent: 'center' },
  rowTopRight: { ...row, alignItems: 'flex-start', justifyContent: 'flex-end' },
  rowCenterLeft: { ...row, alignItems: 'center', justifyContent: 'flex-start' },
  rowCenterRight: { ...row, alignItems: 'center', justifyContent: 'flex-end' },
  rowBottomLeft: { ...row, alignItems: 'flex-end', justifyContent: 'flex-start' },
  rowBottomCenter: { ...row, alignItems: 'flex-end', justifyContent: 'center' },

  // ====================================================
  // Flex Item Alignment
  // ====================================================

  spaceAround: { justifyContent: 'space-around' },
  spaceBetween: { justifyContent: 'space-between' },

  alignStart: { alignSelf: 'flex-start' },
  alignCenter: { alignSelf: 'center' },
  alignEnd: { alignSelf: 'flex-end' },
  alignStretch: { alignSelf: 'stretch' },

  // ====================================================
  //  Flex Sizing
  // ====================================================

  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },
}