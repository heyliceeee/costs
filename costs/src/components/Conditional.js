import { useState } from "react";

function Conditional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();


    function sendEmail(e) {
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    }

    function cleanEmail() {
        setUserEmail('');
    }

    return (
        <div>
            <h2>Create your account: </h2>

            <form>
                <input type="email" placeholder="Insert your email" onChange={(e) => setEmail(e.target.value)}/>
            </form>

            <button type="submit" onClick={sendEmail}>Send email</button>
            {userEmail && (
                <div>
                    <p>the user's email is: {userEmail}</p>
                    <button onClick={cleanEmail}>Clean email</button>
                </div>
            )}
        </div>
    );
}

export default Conditional;