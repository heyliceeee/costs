import { useState } from "react";

function MyName({setName}) {


    return (
        <div>
            <p>Insert your name:</p>
            <input type="text" placeholder="What's your name?" onChange={(e) => setName(e.target.value)}/>
        </div>
    );
}

export default MyName;