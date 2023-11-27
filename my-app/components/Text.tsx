import React from "react";

const Text = () => {
    const isClientSide = typeof window !== 'undefined';
    return (
        <div>
            <h1>
                {isClientSide ? "This is rendered on the client side" : "This is rendered on the server side"}
            </h1>
        </div>
    )
};

export default Text;