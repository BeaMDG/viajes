import '../Components/ProductContainer.css'


const ProductContainer = (props)  => {
  return (
    <section className="products__section">
        <h1 className="products__title">LOS MEJORES MUSEOS </h1>
        <div className='products__conteiner'>
        {props.children} 
        </div>
    </section>
  )
}

export {ProductContainer}