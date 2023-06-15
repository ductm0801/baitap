import React from 'react'
import { data } from '../shared/ListOfPlayers'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container, CardPanel } from 'react-materialize'
export default function Player() {
  const [player, setPlayer] = useState([])


  return (

    <Container>
      <Row>
        {data.map((player) => (
          <Col key={player.id} s={4} >

            <Card>
              <img src={player.img} />

              <h4>{player.name}<Icon right>more_vert</Icon></h4>

              <p>{player.club}</p>

              <Link to={`detail/${player.id}`}>
                <p ><button className='button'>Detail</button></p>
              </Link>
            </Card>
          </Col >
        ))
        }
      </Row>


    </Container >




    // <div className='container'>
    //   {data.map((player) => (
    //     <div className='column' key={player.id}>
    //       <div className='card'>
    //         <img src={player.img} />
    //         <h3>{player.name}</h3>
    //         <p className='title'>{player.club}</p>
    //         <Link to={`detail/${player.id}`}>
    //           <p><button>Detail</button></p>
    //         </Link>
    //       </div>
    //     </div>
    //   ))}

    //   <div id='popup1' className='overlay'>
    //     <div className='popup'>
    //       <img src={player.img}>

    //       </img>
    //       <h2>{player.name}</h2>
    //       <a className='close' href='#'>&times;</a>
    //       <div className='content'>
    //         {player.info}
    //       </div>
    //     </div>
    //   </div>

    // </div>
  )
}
