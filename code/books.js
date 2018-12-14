import PropTypes from 'prop-types';
import React from 'react';
import navBar from '../assets/navbar';

const Movie = ({title, data, type}) => (
    <div className="top">
        <main>
            <h1>McKay's Favorite {type}</h1>
            <div>
                {(data !== undefined) ?
                    data.map((thing) => (
                            <div className='books'>
                                <h2>{thing.title}</h2>
                                <h3>{thing.author}</h3>
                                <img src={thing.img}/>
                                <p>{thing.text}</p>
                            </div>
                        )
                    )
                    : <p>You suck</p>
                }
            </div>
        </main>
    </div>
);

export default Movie;
