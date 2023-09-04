import Item from "./Item";

function List(){
    return (
        <>
            <h1>My List</h1>
            <ul>
                <Item brand="Audi" year={1909}/>
                <Item brand="BMW" year={1916}/>
                <Item brand="Renault" year={1899}/>
            </ul>
        </>
    );
}

export default List;