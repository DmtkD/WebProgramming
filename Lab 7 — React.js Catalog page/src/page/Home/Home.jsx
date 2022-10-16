import Header from '../../components/Header/Header.jsx';
import Main from '../../components/Main/Main.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { Fragment } from 'react';

function Home() {
    return (
        <Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </Fragment>
    );
}

export default Home;