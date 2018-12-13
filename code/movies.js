import PropTypes from 'prop-types';
import React from 'react';
import navBar from '../assets/navbar';

/**
 * The page layout component
 */
const Movie = ({title, stylesheet, header, main, footer}) => (
    <html>
    <head>
        <title>{title}</title>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </head>
    <body>
    <div className="top">
        <header role="banner">
            {header}
        </header>
        <div className='navBar'>
            <ul>{
                navBar.map((option) => (
                        <li><a href={option.link}>{option.text}</a></li>
                    )
                )
            }</ul>
        </div>
        <main>
        </main>
    </div>

    <footer>
        {footer}
    </footer>
    </body>
    </html>
);

Movie.propTypes = {
    /**
     * title: Homepage
     */
    title: PropTypes.string.isRequired,

    /**
     * main: (partials)(5)
     */
    main: PropTypes.node.isRequired,

    /**
     * footer: (partials)(2)
     */
    footer: PropTypes.node.isRequired,
};

Movie.defaultProps = {};

export default Movie;
