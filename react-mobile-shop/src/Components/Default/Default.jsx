import React from "react";
import { useIMQA } from "imqa-react-sdk";

export default function Default(props) {
  console.log(props);
  const IMQARef = useIMQA();

  return (
      <div ref={IMQARef}>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
              <h1 className="display-3">404</h1>
              <h1>error</h1>
              <h2>page not found</h2>
              <h3>
                the requested URL{" "}
                <span className="text-danger">"{props.location.pathname}"</span> was
                not found
              </h3>
            </div>
          </div>
        </div>
      </div>
  );
}
