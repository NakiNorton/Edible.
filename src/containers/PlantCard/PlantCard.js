import React from 'react';
import { connect } from 'react-redux'
import { addPlant, removePlant } from '../../actions';
import './PlantCard.scss';

const PlantCard = ({ id, plantName, image, sciName, list, isSaved, addPlant, removePlant }) => {

  const handleClick = () =>  {
  !isSaved ? addPlant(id) : removePlant(id)
  }

  return (
    <section className='PlantCard'>
        <img className='Book-card-image' alt={plantName} src={image} />
        <article id={id} className='plant-details'>
          <p>Common name: {plantName}</p>
          <p>Scientific name: {sciName}</p> 
          <p>What's edible? The {list}</p> 
          <button className='save-plant-btn' onClick={handleClick}>{!isSaved ? 'Save' : 'Remove'}</button>
        </article>
    </section>
  )
}

export const mapDispatchToProps = {
  addPlant,
  removePlant
}

export default connect(null, mapDispatchToProps)(PlantCard)