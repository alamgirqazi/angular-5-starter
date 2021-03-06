import { BrowserXhr, HttpModule } from '@angular/http';
import { BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgProgressBrowserXhr, NgProgressModule } from 'ngx-progressbar';
import { ToasterModule, ToasterService } from 'angular2-toaster';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { AsideNavigationService } from './services/asideNavigation.Service';
import { AuthService } from '../sdk/services/core/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CookieBrowser } from '../sdk/storage/cookiestorage.browser';
import { CustomdirectivesModule } from './shared/directives/customdirectives/customdirectives.module';
import { ErrorInterceptor } from '../sdk/services/core/httpinterceptor.service';
import { LoginComponent } from './login/login.component';
import { MiscHelperService } from '../sdk/services/custom/misc.service';
import { NgModule } from '@angular/core';
import { RedirectLoginGuard } from './guard/redirectlogin.service';
import { Router } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { StorageBrowser } from '../sdk/storage/storage.browser';
import { TodosApi } from '../sdk/services/custom/todos.service';
import { isLoginGuard } from './guard/islogin.service';

// import { SidebarService } from './shared/sidebar.service';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRouting,
    SlimLoadingBarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToasterModule,
    ModalModule.forRoot(),
    HttpModule,
    HttpClientModule,
    NgProgressModule,
    BsDatepickerModule.forRoot(),
    CustomdirectivesModule
  ],
  providers: [
    isLoginGuard,
    RedirectLoginGuard,
    StorageBrowser,
    CookieBrowser,
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr },
    TodosApi,
    // SidebarService,
    ToasterService,
    MiscHelperService,
    AuthService,
    AsideNavigationService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
