export const callMicroflow = (name, data) => {
  mx.data.action({
    params: {
      applyto: 'set',
      actionname: name,
    },
  })
}