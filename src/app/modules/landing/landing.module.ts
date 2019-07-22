import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '@landing/pages/landing/landing.page';
// import {ProductModule} from '../products/products.module.ts';
import {SharedModule} from '@shared/shared.module';
    
export const landingRoutes: Routes = [
    {
        path: '',
        component: LandingPage
    },
    //lazy loading module import for accesing routes of product module
    {
        path: 'product',
        loadChildren:'../product/product.module#ProductModule'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(landingRoutes)
    ],
    declarations: [
        LandingPage
    ],
    providers: []
})
export class LandingModule {
}
