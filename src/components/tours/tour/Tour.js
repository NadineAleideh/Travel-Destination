import './Tour.css'
import { Link } from 'react-router-dom';


function Tour(props) {
  return (

    <div className='PlaceContainer'>
      {props.data3.map((place) => {

        return (
          <div key={place.id}>
            <Link to={`/city/${place.id}`} className='CardLink'  >

              <div className='PlaceDiv'>
                <img className='PlaceImg' src={place.image} alt={place.name}></img>
                <h4 className='PlaceName'>{place.name}</h4>
              </div><hr></hr>
            </Link>
            </div>
        )
      })}
    </div>
  )
}

export default Tour;

