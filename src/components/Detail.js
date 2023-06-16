import React from 'react';
import { useParams } from 'react-router-dom'
import { data } from '../shared/ListOfPlayers'
import { useState } from 'react';
import ModalCase from './ModalCase';
import {Icon,Card,CardPanel,Container,CardTitle, Button} from 'react-materialize';
export default function Detail() {

    const [isOpen, setIsOpen] = useState(false);



    const userName = useParams()
    const player = data.find(obj => {
        // eslint-disable-next-line eqeqeq

        return obj.id == userName.id;
    });
    let cost = player.cost.toLocaleString()

    return (
        <Container >
            <Button floating onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                <Icon>ondemand_video</Icon>
            </Button>
            {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
            <Card>
                    
                    <div className='product-tumb'>
                        <img src={`../${player.img}`} alt='' />

                    </div>
                    <CardTitle>{player.name}</CardTitle>
            
                    <CardPanel className='teal'>
                    <strong className="white-text" >
                               
                    <h4>{player.club}</h4> 
                
                   <h4> Market value: € {cost}</h4> 
                    <span class="flow-text">
                    {player.info}
                    </span>
                    </strong>     
                </CardPanel>
                

            </Card>

        </Container>

    )
}