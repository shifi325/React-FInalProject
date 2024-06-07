import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToShoppingCart } from '../../features/Order/OrderSlice'
import ShoppingCart from "../orders/ShopCart";
import '../../ProductDetails.css';
import { useNavigate } from 'react-router-dom';
import ShopCart from "../orders/ShopCart";

const ProductToAdd = () => {
    const { state } = useLocation();
    const { p } = state;
    const [quantity, setQuantity] = useState(1);
    const dis = useDispatch()
    const [showCart, setShowCart] = useState(false)
    const navigate = useNavigate();
    const userStatus=useSelector(s=>s.users.status)


    const addToCart = () => {
        dis(addToShoppingCart({ p, quantity }))
        setShowCart(true)
        setTimeout(() => {
            setShowCart(false)
        }, 5000)
    }
    useEffect(() => {
        if (showCart) {
            const timer = setTimeout(() => {
                setShowCart(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showCart]);

    const renderButtons = () => {
        switch (userStatus) {
            case 'guest':
                return ( <div className="quantity-container">
                <div className="quantity-controls">
                    <button className="quantity-button" onClick={() => setQuantity(prevQuantity => prevQuantity - 1)} disabled={quantity === 1}>
                        <span>-</span>
                    </button>
                    <span>{quantity}</span>
                    <button className="quantity-button" onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}>
                        <span>+</span>
                    </button>
                </div>
                <button className="add-to-cart-button" onClick={addToCart}>
                    Add to Cart
                </button>
            </div>);
                        case 'customer':
                            return ( <div className="quantity-container">
                            <div className="quantity-controls">
                                <button className="quantity-button" onClick={() => setQuantity(prevQuantity => prevQuantity - 1)} disabled={quantity === 1}>
                                    <span>-</span>
                                </button>
                                <span>{quantity}</span>
                                <button className="quantity-button" onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}>
                                    <span>+</span>
                                </button>
                            </div>
                            <button className="add-to-cart-button" onClick={addToCart}>
                                Add to Cart
                            </button>
                        </div>);
             case 'admin':
                return (<>
                        <button >delete</button>
                        <button>update</button>
                        {/* <Button onClick={() => {  navigate(`/AddProduct/${p.id}`) }}>
                                                <DeleteForeverIcon size="big" sx={{ color: "#00FF66" }} />
                                            </Button>
                                            <Button onClick={() => { navigate(`/UpdateProduct/${p.id}`) }}>
                                                <CreateIcon size="big" sx={{ color: "#00FF66" }} />
                                            </Button> */}
                        </>);}

        }
    return (<>

        <div className="shopping-cart-container">
            <button onClick={()=>navigate('/navbar')} >back</button>
            {showCart && <ShopCart show='true'></ShopCart>}
        </div>
        <div className="product-details-container">
            <img src={p.imgUrl} alt={p.name} className="product-image" />
            <div className="product-details">
                <h2>{p.description}</h2>
                <p>price:{p.price}</p>
                <p>quantity:{p.quantity}</p>

                {renderButtons()}

               
            
            </div>
        </div></>
    );
}

export default ProductToAdd;