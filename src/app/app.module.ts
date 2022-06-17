import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//--component
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TranslateWordPipe } from './shared/pipes/translate-word.pipe';
import { RatingComponentComponent } from './shared/rating-component/rating-component.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './shared/services/task.service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TaskManagerModule } from './task-manager/task-manager.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    TranslateWordPipe,
    RatingComponentComponent,
    PageNotFoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TaskManagerModule,
    MatPaginatorModule
    

    
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
