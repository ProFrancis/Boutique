export const findProductById = (state, id) => {
  return state.products.data.find(product => product._id === id)
}

export const getAllProduct = (state) => {
  return state.products.data
}