// import React, { Component } from "react";
import React from "react";

// * import cart folder components
import CartItem from "./CartItem";
import {useIMQA} from "imqa-react-sdk";

// export default class CartList extends Component {
export default function CartList() {
    const IMQARef = useIMQA();
    // render() {
    const { value } = this.props;
    const { cart } = this.props.value;

    return (
        <div ref={IMQARef}>
            <div className="container-fluid">
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} value={value} />
                ))}
            </div>
        </div>
    );
    // }
}
