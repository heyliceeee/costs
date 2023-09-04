function AnotherLists({items}) {
    return (
        <>
            <h3>My list of good things:</h3>
            {items.length > 0 ? (items.map((item, index) => (<p key={index}>{item}</p>))) 
            : 
            (<p>no have items in list!</p>)}
        </>
    );
}

export default AnotherLists;