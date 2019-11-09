import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgbModule,NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule, } from './material-module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatPaginatorModule,MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CustommappingComponent } from './custommapping/custommapping.component';
import { WorkPackagesearchComponent } from './work-packagesearch/work-packagesearch.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    HomeComponent,
    CustommappingComponent,
    WorkPackagesearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    NgbModule.forRoot(),
    MaterialModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatPaginatorModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
