import { Fragment } from "react";
import Article from "../../components/Acticle/Article";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Catalog.scss"

function Catalog() {
    const card = [1, 2, 3, 4, 5,]
    return (
        <Fragment>
            <Header/>
            <Filter/>
            <main className="articleCard">
                {card.map((el, index) => {return <Article key={index} number={el}/>})}
            </main>
            <Footer/>
        </Fragment>
    );
}

export default Catalog