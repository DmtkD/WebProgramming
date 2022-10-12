import './Card.css';

function Card(props) {
    return (
        <div className='Card'>
            <img src={require(`../../assert/img/Camera${props.number}.png`)} alt={`img${props.number}`}/>
            <h2>Tile {props.number} Camera</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
        </div>
    )
}

export default Card;