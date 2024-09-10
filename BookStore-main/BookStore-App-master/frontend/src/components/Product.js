import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'

const Product = ({ product }) => {
  const dispatch = useDispatch()

  const handleaddCart = () => {
    dispatch(addToCart(product._id, 1))
  }

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>

        <button onClick={handleaddCart}>Add Cart</button>
      </Card.Body>
    </Card>
  )
}

export default Product