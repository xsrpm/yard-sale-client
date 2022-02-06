import xLogo from '@/assets/icons/x.svg'
import cart from '../../assets/icons/cart.svg'
import oval from '../../assets/icons/Oval.svg'
import ovalSelected from '../../assets/icons/Oval-selected.svg'
import './style.css'
import { useContext } from 'react'
import { AppContext } from '../../routes/AppContext'

export function ProductDetails({ product, isOpen, onClose }) {
  const { addToCart } = useContext(AppContext)
  return (
    <aside className={'ProductDetails ' + (isOpen ? '' : 'hide')}>
      <img src={xLogo} alt='close' onClick={onClose} />
      <div className='ProductDetails_images'>
        {product?.images?.map((image, index) => (
          <picture key={index}>
            <img src={image} alt='product image ' />
          </picture>
        ))}
      </div>
      <div className='ProductDetails_Ovals'>
        <img src={ovalSelected} alt='oval selected' />
        <img src={oval} alt='oval' />
        <img src={oval} alt='oval' />
      </div>
      <div>
        <h2>
          <span>$ </span>
          <span>{product.price}</span>
        </h2>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <button className='primary-button' onClick={() => addToCart(product)}>
          <img src={cart} alt='add to cart' />
          <span>Add to cart</span>
        </button>
      </div>
    </aside>
  )
}
