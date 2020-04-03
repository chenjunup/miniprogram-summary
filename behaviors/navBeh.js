export default Behavior({
  properties: {
    customAct: Boolean,
    back: {
      type: Boolean,
      value: true
    },
    home: {
      type: Boolean,
      value: true
    },
    onBack: {
      type: Function
    },
    onHome: {
      type: Function
    }
  }
})