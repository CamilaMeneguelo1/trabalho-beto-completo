const CartItem = ({ item, dispatch, cart }) => {
    const { _id, inStock, checked, images, title, description, price } = item
    return (
      <div class="card border-success mb-3"  style={{ maxWidth: 600, position:"relative"}}>
        <div class="card-header" style={{ display: "flex", flexDirection: "row", position: "relative",backgroundColor:"black" }}>
          <h3 >{item.title}</h3>
        </div>
        <div class="card-body text-success">
          <div class="card-body text-red">
            <img style={{ width: 100, height: 100, display: "inline-block", marginTop: -100, alignItems: "end" }} class="card-img-left" src={images[0].url} alt={images[0].url} />
            <div style={{ display: "inline-block" }}>
              <h4>{item.description}</h4>
              <h5>R$ {item.price}</h5>
              <h5>Disponível: {item.inStock}</h5>
            </div>
            <a href="#" class="btn btn-red" style={{alignItems:"right"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-x" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708z"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
            </a>
          </div>
        </div>
      </div>
    )
  }
  
  export default CartItem