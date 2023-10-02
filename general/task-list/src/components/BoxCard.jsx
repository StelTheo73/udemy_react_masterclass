import { useState } from "react";

import "./BoxCard.css";

export const BoxCard = ({result, children}) => {
    const [show, setShow] = useState(true);

    return (
        <div className={`box-card ${show ? "" : "hidden"}`}>
            <div className={`box ${result}`}>
                {children}
                <button className="trigger" onClick={() => setShow(!show)}>Hide</button>
            </div>
        </div>
    )
}
