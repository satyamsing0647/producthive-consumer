import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


export const routes: Routes = [
    {path:'products', component:ProductsComponent},
    {path:'add-product/:pid', component:CreateProductComponent},
    {path:'product-details/:pid', component:ProductDetailsComponent}
];
