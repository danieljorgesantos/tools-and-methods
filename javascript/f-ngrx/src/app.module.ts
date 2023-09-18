import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLandingComponent } from './_features/page-landing/page-landing.component';
import { PageLoginComponent } from './_features/page-login/page-login.component';
import { NavbarComponent } from './_core/components/navbar/navbar.component';
import { FooterComponent } from './_core/components/footer/footer.component';
import { PageRegisterComponent } from './_features/page-register/page-register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { applicationEffects, applicationState } from './_state';
import { AuthInterceptor } from './_core/interceptor/authconfig.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PageContactUsComponent } from './_features/page-contact-us/page-contact-us.component';
import { PageErrorComponent } from './_features/page-error/page-error.component';
import { PageExploreRecipiesComponent } from './_features/page-explore-recipies/page-explore-recipies.component';
import { CardExploreComponent } from './_core/components/card-explore/card-explore.component';
import { PageMyIboostComponent } from './_features/page-my-iboost/page-my-iboost.component';
import { CardExplorePlaceholderComponent } from './_core/components/card-explore-placeholder/card-explore-placeholder.component';
import { PagePrepareComponent } from './_features/page-prepare/page-prepare.component';
import { PageProfileComponent } from './_features/page-profile/page-profile.component';
import { PageAddRecipeComponent } from './_features/page-add-recipe/page-add-recipe.component';
import { CardPortionsComponent } from './_core/components/card-portions/card-portions.component';
import { CardAddRecipeComponent } from './_core/components/card-add-recipe/card-add-recipe.component';
import { CardLunchboxComponent } from './_core/components/card-lunchbox/card-lunchbox.component';
import { ToastComponent } from './_core/components/toast/toast.component';
import { ModalComponent } from './_core/components/modal/modal.component';
import { PageProfileMenuComponent } from './_features/page-profile-menu/page-profile-menu.component';
import { PageAddRecipeWithImageComponent } from './_features/page-add-recipe-with-image/page-add-recipe-with-image.component';
import { PageFavoritesComponent } from './_features/page-favorites/page-favorites.component';
import { CardExploreWMdComponent } from './_core/components/card-explore-w-md/card-explore-w-md.component';
import { ChooseStoreNewVersionComponent } from './_features/choose-store-new-version/choose-store-new-version.component';
import { PageMyOwnRecipesComponent } from './_features/page-my-own-recipes/page-my-own-recipes.component';
import { PageDetailRecipeComponent } from './_features/page-detail-recipe/page-detail-recipe.component';
import { PageRelatedProductsComponent } from './_features/page-related-products/page-related-products.component';
import { CardMyMenuComponent } from './_core/components/card-my-menu/card-my-menu.component';
import { PageMymenuComponent } from './_features/page-mymenu/page-mymenu.component';
import { CardPrepareComponent } from './_core/components/card-prepare/card-prepare.component';
import { PageSharedRecipesComponent } from './_features/page-shared-recipes/page-shared-recipes.component';
import { CardSharedRecipesComponent } from './_core/components/card-shared-recipes/card-shared-recipes.component';
import { PageShoppingCartComponent } from './_features/page-shopping-cart/page-shopping-cart.component';
import { CardShoppingCartComponent } from './_core/components/card-shopping-cart/card-shopping-cart.component';
import { CardRelatedRecipiesComponent } from './_core/components/card-related-recipies/card-related-recipies.component';
import { PageCheckoutComponent } from './_features/page-checkout/page-checkout.component';
import { PageCheckoutOfflineComponent } from './_features/page-checkout-offline/page-checkout-offline.component';
import { PageSuccessCheckoutOnlineComponent } from './_features/page-success-checkout-online/page-success-checkout-online.component';
import { PageSuccessRegisterComponent } from './_features/page-success-register/page-success-register.component';
import { CardShoppingCartSharedAndCommonComponent } from './_core/components/card-shopping-cart-shared-and-common/card-shopping-cart-shared-and-common.component';
import { PageAddItemsToShoppingCartComponent } from './_features/page-add-items-to-shopping-cart/page-add-items-to-shopping-cart.component';
import { CardAddItemsShoppingcartComponent } from './_core/components/card-add-items-shoppingcart/card-add-items-shoppingcart.component';
import { PageShoppingListComponent } from './_features/page-shopping-list/page-shopping-list.component';
import { CardProductComponent } from './_core/components/card-product/card-product.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLandingComponent,
    PageLoginComponent,
    NavbarComponent,
    FooterComponent,
    PageRegisterComponent,
    PageContactUsComponent,
    PageErrorComponent,
    PageExploreRecipiesComponent,
    CardExploreComponent,
    PageMyIboostComponent,
    CardExplorePlaceholderComponent,
    PagePrepareComponent,
    PageProfileComponent,
    PageAddRecipeComponent,
    CardPortionsComponent,
    CardAddRecipeComponent,
    CardLunchboxComponent,
    ToastComponent,
    ModalComponent,
    PageProfileMenuComponent,
    PageAddRecipeWithImageComponent,
    PageFavoritesComponent,
    CardExploreWMdComponent,
    CardMyMenuComponent,
    ChooseStoreNewVersionComponent,
    PageMyOwnRecipesComponent,
    PageDetailRecipeComponent,
    PageRelatedProductsComponent,
    PageMymenuComponent,
    CardPrepareComponent,
    PageSharedRecipesComponent,
    CardSharedRecipesComponent,
    PageShoppingCartComponent,
    CardShoppingCartComponent,
    CardRelatedRecipiesComponent,
    PageCheckoutComponent,
    PageCheckoutOfflineComponent,
    PageSuccessCheckoutOnlineComponent,
    PageSuccessRegisterComponent,
    CardShoppingCartSharedAndCommonComponent,
    PageAddItemsToShoppingCartComponent,
    CardAddItemsShoppingcartComponent,
    PageShoppingListComponent,
    CardProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(applicationState),
    EffectsModule.forRoot(applicationEffects),
    StoreDevtoolsModule.instrument({
      // Instrumentation must be imported after importing StoreModule (config is optional)
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
