
import {ProductContainer} from "../Components/ProductContainer";
import { Product } from "../Components/Product";
import data from '../Products.json';



const Museos = () =>{
    return(

    <ProductContainer> 
        {data.map(product =>
           <Product 

           key={product.name}
           name={product.name}
           city={product.City}
           imagenes={product.imagenes}
          />

         
         )}






        
     </ProductContainer>
    )
}
export default Museos