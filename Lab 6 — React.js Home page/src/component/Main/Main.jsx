import Camera from '../../assert/img/Camera1.webp';
import Card from '../Card/Card.jsx'
import './Main.css'

function Main() {
    return (
        <main className='Main'>
            <div className='MainInformation'>
                <img src={Camera} alt='Camera'/>
                <div>
                    <h1> Camera </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                </div>
            </div>
            <div className='MainCard'>
                <Card number='1'/>
                <Card number='2'/>
                <Card number='3'/>
            </div>
        </main>
    )
}
export default Main;