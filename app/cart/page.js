import {age, name} from "./data.js"
import hello from "./hello.js"



export default function Cart() {
  let cart = ["Tomatoes", "Pasta", "Coconut"];
  let cardName = ["현대카드", ]
  return (
    <div>
      {hello}
      <h4 className="title">Cart</h4>
      {cart.map((a, i)=>{
        return(
          <CartItem item={cart[i]}/>
        )
      })}
      <Banner cardName="현대카드"/>
      <Banner cardName="삼성카드"/>
      <Button color="red"/>
      <Button color="blue"/>
    </div>
  )
} 

function Button(props) {
  return(
    <button style={{background : props.color}}>버튼</button>
  )
}

function Banner(props) {
  return(
    <h5>{props.cardName} 결제 행사중</h5>
  )
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}