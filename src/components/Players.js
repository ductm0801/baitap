import React from 'react'
import { data } from '../shared/ListOfPlayers'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Player() {
  const [player, setPlayer] = useState([])


  return (
    <div className='container'>
      {data.map((player) => (
        <div className='column' key={player.id}>
          <div className='card'>
            <img src={player.img} />
            <h3>{player.name}</h3>
            <p className='title'>{player.club}</p>
            <Link to={`detail/${player.id}`}>
              <p><button>Detail</button></p>
            </Link>
          </div>
        </div>
      ))}

      <div id='popup1' className='overlay'>
        <div className='popup'>
          <img src={player.img}>

          </img>
          <h2>{player.name}</h2>
          <a className='close' href='#'>&times;</a>
          <div className='content'>
            {player.info}
          </div>
        </div>
      </div>

    </div>
  )
}
