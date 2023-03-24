const getters = {
  amountCart: (state) => {
    return state.cart.length;
  },
  itemsCart: (state) => {
    return state.cart;
  },
  saleTotal: (state) => {
    return state.cart.reduce(
      (accumulator, item) => accumulator + item.value,
      0
    );
  },
};

export default getters;
