import PropTypes from 'prop-types';
import React from 'react';
import navBar from '../assets/navbar';

const Movie = ({title, data, type}) => (
    <div className="allMovies">
        <main>
            <h1>McKay's Favorite {type}</h1>
            <div>
                {(data !== undefined) ?
                    data.map((thing) => (
                            <div className='movies'>
                                <h2>{thing.title}</h2>
                                <img src={thing.img}/>
                                <p>{thing.text}</p>
                                <div className='trailer'>
                                    <iframe width="560" height="315" src={thing.trailer}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen/>
                                </div>
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
