import React from "react";
import { useIMQA } from "imqa-react-sdk";

export default function Footer() {
    const year = new Date().getFullYear();
    const IMQARef = useIMQA();

    return (
        <div ref={IMQARef}>
            <footer className="footer">
                <h2>Mobile Shop | E-Commerce Project</h2>
                <p>
                    &copy; <span>{year}</span> MobileShop.com - All Rights Copyright
                    Reserved To{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/SamiurRahmanMukul"
                    >
                        Samiur Rahman Mukul
                    </a>
                </p>
            </footer>
        </div>
    );
}
