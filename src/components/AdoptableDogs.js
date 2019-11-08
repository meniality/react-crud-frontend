import React from 'react'
import DogCard from './DogCard'

const AdoptableDogs = (props) => {

    const adoptableDogs = props.adoptableDogs.map(dog => {
        return <DogCard addDog={props.addDog} key={dog.id} dog={dog} />
    })

    return (
        <div className="adoptable-dogs-container">
            <h1 className="header">Adoptable Dogs</h1>
            <div className="adoptable-dogs">
                {adoptableDogs}
            </div>
        </div>
    )
}

export default AdoptableDogs