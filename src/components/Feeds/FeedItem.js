import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DefaultImg from '../layout/default.png'

const FeedItem = ({ feed: { title, author, thumbnail, url } }) => {
    return (
        <Link to={`/feed/${author}`}>
            <div className="card text-center">
                <img
                    src={(thumbnail !== 'self') ? thumbnail : DefaultImg}
                    alt={author}
                    className=""
                    style={{ height: '120px', objectFit: 'cover' }} />

                <h3>{title}</h3>
            </div>
        </Link>
    )
}

FeedItem.propTypes = {
    feed: PropTypes.object.isRequired
}

export default FeedItem;