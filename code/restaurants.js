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
                            <div className='restaurants'>
                                <h2>{thing.name}</h2>
                                <img className='img' src={thing.img}/>
                                {/*<img className='foodImg' src={thing.foodImg}/>*/}
                                <p>{thing.review}</p>
                                <div className='google'>
                                    <iframe
                                        src={thing.address}
                                        width="300" height="150" frameBorder="0" style={{border: 0}} allowFullScreen/>
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
