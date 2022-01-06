import 'style.css'
import xLogo from '@/assets/icons/x.svg'
import cart from '../../assets/icons/cart.svg'
import oval from '../../assets/icons/Oval.svg'
import ovalSelected from '../../assets/icons/Oval-selected.svg'

export function ProductDetails() {
  return (
    <aside className='ProductDetails'>
      <img src={xLogo} alt='close' />
      <picture>
        <img
          src='https://github.com/xsrpm/standard-web-projects/raw/master/css/yard-sale/images/products/retro-refrigerator.jpg'
          alt='retro refrigerator'
        />
      </picture>
      <div className='text-center'>
        <img src={ovalSelected} alt='oval selected' />
        <img src={oval} alt='oval' />
        <img src={oval} alt='oval' />
      </div>
      <div>
        <h2>
          <span>$ </span>
          <span>120,00</span>
        </h2>
        <h3>Retro refrigerator</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          expedita, placeat, illo nam iusto eaque culpa illum deleniti quos aut
          dolores, reiciendis commodi totam fuga iste sed impedit delectus!
          Officia?
        </p>
        <button className='primary-button'>
          <img src={cart} alt='add to cart' />
          <span>Add to cart</span>
        </button>
      </div>
    </aside>
  )
}
