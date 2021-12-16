import React from 'react'
import { useContext, useState } from 'react'
import { DataContext } from '../store/GlobalState'
import CartItem from '../components/CartItem'

const Car = () => {
  const { state, dispatch } = useContext(DataContext)
  const { cart } = state

  const [total, setTotal] = useState(0)

  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <div style={{ display: "flex", flexDirection: "row", position: "relative" }}>
        <h3 style={{ color: "#000000" }}>SEU CARRINHO</h3>
        <h3 style={{ color: "#000000", marginLeft: 800 }}> ENVIO </h3>
      </div>
      <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Endereço</span>
  </div>
  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Contato</span>
  </div>
  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
</div>
     <div>
     <h3 style={{textAlign: "right",color: "#000000", marginTop: 30 }}> TOTAL: </h3>
     <a href="#" class="btn btn-dark" style={{marginLeft: 1000}}>FINALIZAR COMPRA</a>
     </div>
      <table>
        <tbody>
          {cart.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              dispatch={dispatch}
              cart={cart}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Car