import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { StocksAddComponent } from './stocks-add/stocks-add.component';
import { StocksEditComponent } from './stocks-edit/stocks-edit.component';
import { StocksDeleteComponent } from './stocks-delete/stocks-delete.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [
  { path: '', 
  component: StocksComponent,
  },
  { path: 'adds', 
    component: StocksAddComponent,
  },
  { path: 'edits/:id', 
    component: StocksEditComponent,
  },
  { path: 'lists', 
    component: StocksListComponent,
  }
];



@NgModule({
  declarations: [
    StocksComponent,
    StocksListComponent,
    StocksAddComponent,
    StocksEditComponent,
    StocksDeleteComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    FlexModule,
    MatSelectModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class StocksModule { }
