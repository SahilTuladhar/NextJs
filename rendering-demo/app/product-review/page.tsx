import Product from "../_components/product"
import Review from "../_components/review"
import { Suspense } from "react";

export default function prPage(){
 
    return(
        <>
        <div>
        <h1>This is the Product-Review Page</h1>
        <Suspense fallback={<p>The Product component is loading...</p>}>
        <Product/>
        </Suspense>
        
        <Suspense fallback={<p>The Review component is loading...</p>}>
        <Review />
        </Suspense>
        
       </div>
        </>
            
      
    );
}