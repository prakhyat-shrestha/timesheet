
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProjectMgtPage} from '../pages/project-mgt/project-mgt';
import { ProjectSummaryPage} from '../pages/project-summary/project-summary';
import { ProjectEditPage} from '../pages/project-edit/project-edit';
import { ProjectAddPage} from '../pages/project-add/project-add';
import { UnitTypePage} from '../pages/unit-type/unit-type';
import { Project } from '../providers/project';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Network} from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProjectMgtPage,
    ProjectSummaryPage,
    ProjectEditPage,
    ProjectAddPage,
    UnitTypePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProjectMgtPage,
    ProjectSummaryPage,
    ProjectEditPage,
    ProjectAddPage,
    UnitTypePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Project,
    Network
  ]
})
export class AppModule {}
