import React from 'react';
import PropTypes from 'prop-types';

import { ImgWrapper, Img, Article } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';

import  { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';
import { Link } from '@reach/router';

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMG }) => {
    const [show, element]  = useNearScreen();

    return (
        <Article ref = {element}>
            {
                show && 
                <> 
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} alt="" />
                        </ImgWrapper>
                    </Link>
                    <ToggleLikeMutation>
                        {
                            (toggleLike) => {
                                const handleFavClick = () => {
                                    toggleLike({ variables: {
                                        input: { id }
                                    }});
                                };
                                return   <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
                            }
                        }
                    </ToggleLikeMutation>
                </>
            }
        </Article>
    )
}

PhotoCard.propTypes = {
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    likes: function (prop, propName, componentName) {
        const propValue = prop[propName]

        if (propValue === undefined) {
            return new Error(`${propName} Value must be defined`)
        }

        if(propValue < 0) {
            return new Error(`${propName} Value must be greater than zero`)
        }

    }
}
