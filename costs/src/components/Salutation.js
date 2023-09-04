function Salutation({name}) {

    function generateSalutation(someName){
        return `whats up ${someName}`;
    }

    return (
        <>
            <p>{name && generateSalutation(name)}</p>
        </>
    );
}

export default Salutation;