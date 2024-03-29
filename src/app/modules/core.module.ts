import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from '../interceptors/auth-interceptor.service';



@NgModule({
    providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}], 
}) 
export class CoreModule{}