import React from 'react'
import { useContext, useState } from 'react'
import { resizeImage } from '../../utils/utils'
import { AppContext } from '../../AppContext'
import { ProductDetails } from '../../components/ProductDetails'
import "./style.css"

export default function ProductList({searchedProducts}) {
    const { addToCart, productInCart } = useContext(AppContext)
    const handleClickCloseProductDetails = () => {
      setProductDetailsOpen(false)
    }

    const [productDetailsOpen, setProductDetailsOpen] = useState(false)
    const [productDetails, setProductDetails] = useState({})
    const handleClickProductDetails = (product) => {
      setProductDetails(product)
      setProductDetailsOpen(true)
    }

  return (
    <>
        <div className='ProductList'>
    {searchedProducts.map((product) => (
      <div key={product.id} className='product'>
        <div
          className='product-image'
          onClick={() => handleClickProductDetails(product)}
        >
          <img
            src={product.images[0]}
            alt='product'
            srcSet={`${resizeImage(
              product.images[0],
              216,
              162
            )} 216w, ${resizeImage(product.images[0], 163, 122)} 163w`}
            sizes='(max-width: 640px) 163px, 50vw'
            loading='lazy'
          />
          <div className='message'>Removed from cart</div>
        </div>
        <div className='product-info'>
          <div>
            <h3>
              <span>$</span>
              <span>{product.price}</span>
            </h3>
            <p>{product.title}</p>
          </div>
          <div
            className={
              productInCart(product.id) ? 'added-to-cart' : 'add-to-cart'
            }
            onClick={() => addToCart(product)}
          ></div>
        </div>
      </div>
    ))}
  </div>
  <ProductDetails
        product={productDetails}
        isOpen={productDetailsOpen}
        onClose={handleClickCloseProductDetails}
      />
    </>
  )
}
