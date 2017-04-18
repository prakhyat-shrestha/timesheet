var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProjectMgtPage } from '../pages/project-mgt/project-mgt';
import { ProjectSummaryPage } from '../pages/project-summary/project-summary';
import { ProjectEditPage } from '../pages/project-edit/project-edit';
import { ProjectAddPage } from '../pages/project-add/project-add';
import { UnitTypePage } from '../pages/unit-type/unit-type';
import { Project } from '../providers/project';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            Project,
            Network
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map