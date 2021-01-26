import React from 'react'
import propTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ name, image, price }) => {
  return (
        <article className="product">
            <h4>{name || 'default name'}</h4>
            <p>{price || 'POA'}</p>
            <img src={image?.url || defaultImage} alt={name || 'default name'} />
        </article>
    )
}

Product.propTypes = {
    image: propTypes.object.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired
}

// Product.defaultProps = {
//     name: 'default name',
//     price: 'POA',
//     image: {url: defaultImage}
// }

export default Product
