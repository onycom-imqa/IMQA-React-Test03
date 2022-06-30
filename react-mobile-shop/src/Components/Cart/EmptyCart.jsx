import React from "react";
import { useIMQA } from "imqa-react-sdk";

export default function EmptyCart() {
    const IMQARef = useIMQA();
    return (
        <div ref={IMQARef}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-capitalize">
                        <h1>your cart is currently empty</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
