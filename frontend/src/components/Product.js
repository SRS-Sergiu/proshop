import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating  from './Rating'

const Product = ({ product }) => {
    return (
      <Card className="my-3 p-3 rounded">
          <Link to={`/product/${product._id}`}>
              <Card.Img src={product.image} variant='top' />
          </Link>
    
        <Card.Body>
            <Card.Title as='div'>
                 <Link to={`/product/${product._id}`}>
                   <strong>{product.name}</strong> 
                </Link>
            </Card.Title>
        
        </Card.Body>
        <Card.Text as='div'>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as='h3'>
            ${product.price}
        </Card.Text>
      </Card>
    )
}

export default Product
