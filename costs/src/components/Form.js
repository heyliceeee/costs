import {useState} from 'react';

function Form() {

    function createAccountUser(e) {
        e.preventDefault();
        //console.log(name);
        //console.log(password);
        console.log("Create Account of the user");
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();


    return (
        <div>
            <h1>My Form</h1>
            <form onSubmit={createAccountUser}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" placeholder="Insert your name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" placeholder="Insert your password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Create Account"/>
                </div>
            </form>
        </div>
    );
}

export default Form;