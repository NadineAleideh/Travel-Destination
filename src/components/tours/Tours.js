 import './Tours.css';
import Tour from "../tours/tour/Tour";

function Tours(props) {
  return (
    <div className='Container' >
      <h3 className='TopDescrption'>Most visited places list</h3>
      <Tour data3={props.data2}/>

    </div>
)
}

export default Tours;