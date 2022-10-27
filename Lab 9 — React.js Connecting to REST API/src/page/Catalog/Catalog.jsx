import { Fragment, useState } from "react";
import Article from "../../components/Acticle/Article";
import Filter from "../../components/Filter/Filter";
import "./Catalog.scss";

function Catalog() {
    const [search, searchSet] = useState("");

    const getValue = (event) => {
        searchSet(event.target.value)
        console.log(event.target.value);
    }

    const card = [1, 2, 3, 4, 5,]
    return (
        <Fragment>
            <input type="text" className="SearchBox" placeholder="🔍" onChange={getValue}/>
            <Filter/>
            <main className="articleCard">
                {card.map((el, index) => {return <Article key={index} number={el}/>})}
            </main>
        </Fragment>
    );
}

export default Catalog