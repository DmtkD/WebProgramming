import './Card.css';
import img from '../../assert/img/img.svg'

function Card(props) {
    return (
        <div className='Card'>
            <img src={img} alt='img'/>
            <h2>Tile {props.number} Heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
        </div>
    )
}

export default Card;