import Camera from '../../assert/img/MainCamera.webp';
import Card from '../Card/Card.jsx';
import './Main.scss';

function Main() {
    return (
        <main className='Main'>
            <div className='MainInformation'>
                <img src={Camera} alt='Camera' />
                <div>
                    <h1> Camera </h1>
                    <p>Hello Friend. You are on a cool website created by an IoT student. Here you can buy different cameras in different price ranges, settings, etc. You can also sell your cameras here</p>
                </div>
            </div>
            <div className='MainCard'>
                <Card number='1' />
                <Card number='2' />
                <Card number='3' />
            </div>
        </main>
    )
}

export default Main;