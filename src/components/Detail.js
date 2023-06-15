import React from 'react';
import { useParams } from 'react-router-dom'
import { data } from '../shared/ListOfPlayers'
import { useState } from 'react';
import { Icon } from 'react-materialize';
import ModalCase from './ModalCase';
export default function Detail() {

    const [isOpen, setIsOpen] = useState(false);



    const userName = useParams()
    const player = data.find(obj => {
        // eslint-disable-next-line eqeqeq

        return obj.id == userName.id;
    });
    let cost = player.cost.toLocaleString()

    return (
        <div className='containers'>
            <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                <Icon>ondemand_video</Icon>
            </a>
            {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
            <div className='product-card'>
                <div className='pbackground'>
                    <div className='badge'>{player.name}</div>
                    <div className='product-tumb'>
                        <img src={`../${player.img}`} alt='' />

                    </div>
                </div>
                <div className='product-details'>
                    <h4>{player.club}</h4>
                    <div className='product-price'>Market value: € {cost}</div>
                    <p>{player.info}</p>

                    <div className='product-bottom-details'></div>

                </div>

            </div>

        </div>

    )
}