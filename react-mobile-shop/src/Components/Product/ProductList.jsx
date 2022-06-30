// import React, { Component } from "react";
import React from "react";
// * import components
import Product from "./Product";
import Title from "./../Title/Title";

// * import contextAPI
import { ProductConsumer } from "./../../ContextAPI/context.jsx";
import {useIMQA} from "imqa-react-sdk";

// export default class ProductList extends Component {
export default function ProductList() {
  const IMQARef = useIMQA();
  // render() {
  return (
      <div ref={IMQARef}>
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="our" title="products" />

              <div className="row">
                <ProductConsumer>
                  {(value) => {
                    return value.products.map((products) => {
                      return <Product key={products.id} product={products} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
  );
  // }
}
