import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { HomepageComponent } from './Homepage/create-homepage-component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http'
import { ApiServices } from './Services/api.service';
import { LoginModule } from './login/login.module';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateteamdialogueComponent } from './createteamdialogue/createteamdialogue.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CreateteamdialogueComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule, AdminModule,
    MatInputModule,FormsModule,MatButtonModule,MatSelectModule,MatFormFieldModule,MatCardModule,

    LoginModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  
    

  ],
    
  providers: [ApiServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
