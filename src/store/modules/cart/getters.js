const getters = {
    amountCart: state => {
        return state.cart.length;
    },
    itemsCart: state => {
        return state.cart;
    }

};

export default getters;
