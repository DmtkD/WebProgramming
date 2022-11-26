import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SellCard from "../../components/SellCard/SellCard";
import './Cart.scss'

function Cart() {
    const card = useSelector(state => state.product.cart)

    const navigation = useNavigate();

    const goBack = () => {
        navigation(-1)
    }

    return (
        <div className="Cart">
            {card.map((el) => { return <SellCard key={el.id} count={el.quantity} id={el.id}/> })}
            <p className="total-price"> Total price</p>
            <div className="button">
                <button className="back" onClick={goBack}> Back to Catalog </button>
                <button className="continue"> Continue</button>
            </div>
        </div>
    )
}

export default Cart;