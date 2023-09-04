import Button from "./event/Button";

function Event() {
    function myEvent() {
        console.log(`ativated first event...`);
    }

    function secondEvent(){
        console.log("ativated second event...");
    }

    return (
        <div>
            <p>Click for trigger event:</p>
            <Button event={myEvent} text="first event"/>
            <Button event={secondEvent} text="second event"/>
            {/* <button onClick={myEvent}>Ativate!</button> */}
        </div>
    );
}

export default Event;