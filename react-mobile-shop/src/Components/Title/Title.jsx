import React from "react";
import {useIMQA} from "imqa-react-sdk";

export default function Title({ name, title }) {
    const IMQARef = useIMQA();
    return (
        <div ref={IMQARef}>
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-title">
                    <h1 className="text-capitalize font-weight-old">
                        {name} <strong className="text-blue">{title}</strong>
                    </h1>
                </div>
            </div>
        </div>
    );
}
