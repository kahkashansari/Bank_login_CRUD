import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatcaComponent } from './fatca/fatca.component';
import { ShowComponent } from './show/show.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FatcaComponent,
    ShowComponent,
    DeleteComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
      // matt
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,  
      MatRadioModule,
      MatCardModule,
      MatButtonModule,
      MatDatepickerModule,
      MatNativeDateModule ,
      MatDialogModule,
      MatIconModule,
      MatTooltipModule,
      MatButtonToggleModule,
      MatSlideToggleModule ,
      MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
