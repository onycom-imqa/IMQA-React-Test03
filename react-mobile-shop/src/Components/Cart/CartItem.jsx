// import React, { Component } from "react";
import React from "react";

import { useIMQA } from "imqa-react-sdk";

// export default class CartItem extends Component {
export default function CartItem() {
    const IMQARef = useIMQA();
    // render() {
    const { id, title, img, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;

    return (
        <div ref={IMQARef}>
            <div className="row my-1 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img
                        src={img}
                        style={{ width: "5rem", height: "5rem" }}
                        className="img-fluid"
                        alt=""
                    />
                </div>

                <div className="col-10 mx-auto col-lg-2 ">
                    <span className="d-lg-none">product :</span> {title}
                </div>

                <div className="col-10 mx-auto col-lg-2 ">
                    <strong>
                        <span className="d-lg-none">price :</span> ${price}
                    </strong>
                </div>

                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
                    <div className="d-flex justify-content-center">
                        <div>
              <span
                  className="btn btn-black mx-1"
                  onClick={() => {
                      return decrement(id);
                  }}
              >
                -
              </span>
                            <span className="btn btn-black mx-1">{count}</span>
                            <span
                                className="btn btn-black mx-1"
                                onClick={() => {
                                    return increment(id);
                                }}
                            >
                +
              </span>
                        </div>
                    </div>
                </div>

                <div className="col-10 mx-auto col-lg-2 ">
                    <div className=" cart-icon" onClick={() => removeItem(id)}>
                        <i className="fas fa-trash" />
                    </div>
                </div>

                <div className="col-10 mx-auto col-lg-2 ">
                    <strong>item total : ${total} </strong>
                </div>
            </div>
        </div>
    );
    // }
}
