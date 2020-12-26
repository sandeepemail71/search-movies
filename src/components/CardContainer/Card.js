import React, { useState, useEffect } from 'react';
import { Img } from 'react-image';
import ContentLoader from 'react-content-loader';

import './index.css';

export default function Card({
    poster_path,
    original_title,
    overview,
    original_language,
    release_date,
    vote_average
}) {

    const [isHovering, setIsHovering] = useState(false);

    const toggleHoverState = () => {
        return !isHovering;
    }

    const handleMouseHover = () => {
        setIsHovering(toggleHoverState);
    }

    return (
        <div
            className='card'
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}
        >
            <Img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                loader={
                    (
                        <ContentLoader
                            viewBox="0 0 250 250"
                            height="250"
                        >
                            <rect x="0" y="0" rx="0" ry="0" height="250" width="250" />
                        </ContentLoader>
                    )
                }
                unloader={
                    (
                        <ContentLoader
                            viewBox="0 0 250 250"
                            height="250"
                        >
                            <rect x="0" y="0" rx="0" ry="0" height="250" width="250" />
                        </ContentLoader>
                    )
                }
                className='cardImg'
            />
            <div className='content'>
                <div className='movie-title'>{original_title}</div>
                <div className='rating'>IMDB {vote_average}</div>
                <div className='overview'>{overview}</div>
                <div className='language'>{`${original_language} ${new Date(release_date).getFullYear()}`}</div>
            </div>
        </div>
    )
}
