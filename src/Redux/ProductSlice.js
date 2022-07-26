import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        productList: [], 
    },
    reducers: {
        addProduct : (state, action) => {
            const id = action.payload.id
            const index = state.productList.findIndex(p => p.id === id)

            if(index >= 0) {
                state.productList[index].quantity ++
                state.productList[index].totalPrice += action.payload.price
            } else {
                state.productList.push({...action.payload, quantity: 1, totalPrice: action.payload.price })            
            }
        },

        deleteProduct: (state, action) => {
            const id = action.payload.id
            const index = state.productList.findIndex(p => p.id === id)
            state.productList.splice(index, 1)
        },

        decreaseQuantity: (state, action) => {
            const id = action.payload.id
            const index = state.productList.findIndex(p => p.id === id)

            if(state.productList[index].quantity == 1) {
                state.productList = state.productList.filter(p => p.id !== id)
            } else {
                state.productList[index].quantity --
                state.productList[index].totalPrice -= action.payload.price
            }

            // const existingProduct = state.productList.find(product => product.id === action.payload.id)
            
            // if(existingProduct.quantity === 1) {
            //     state.productList = state.productList.filter(product => product.id != action.payload.id)
            //     state.quantity --
            // } else {
            //     existingProduct.quantity --
            //     existingProduct.totalPrice -= action.payload.price
            // }
        }

    }
})

export default productSlice.reducer
export const {addProduct, deleteProduct, decreaseQuantity} = productSlice.actions