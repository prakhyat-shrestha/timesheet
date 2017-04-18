var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Project } from '../../providers/project';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the ProjectEdit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ProjectEditPage = (function () {
    function ProjectEditPage(navCtrl, navParams, projectService, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projectService = projectService;
        this.toast = toast;
        this.myProject = {};
        this.myProject = {
            id: this.navParams.get("_id"),
            rev: this.navParams.get("_rev"),
            projectCode: this.navParams.get('projectCode'),
            projectName: this.navParams.get('projectName'),
            owner: this.navParams.get('owner'),
            location: this.navParams.get('location'),
            projectStatus: this.navParams.get('projectStatus'),
            startDate: this.navParams.get('startDate'),
            endDate: this.navParams.get('endDate')
        };
        // console.log(this.myProject.test);
    }
    ProjectEditPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ProjectEditPage');
        console.log(this.navParams.get('projectCode'));
    };
    ProjectEditPage.prototype.updateProj = function () {
        console.log(this.myProject["projectCode"]);
        this.projectService.updateProject({
            _id: this.myProject["id"],
            _rev: this.myProject["rev"],
            projectCode: this.myProject["projectCode"],
            projectName: this.myProject["projectName"],
            owner: this.myProject["owner"],
            location: this.myProject["location"],
            projectStatus: this.myProject["projectStatus"],
            startDate: this.myProject["startDate"],
            endDate: this.myProject["endDate"]
        });
        this.toast.create({
            message: 'Record Updated',
            duration: 9000
        }).present();
    };
    return ProjectEditPage;
}());
ProjectEditPage = __decorate([
    Component({
        selector: 'page-project-edit',
        templateUrl: 'project-edit.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        Project,
        ToastController])
], ProjectEditPage);
export { ProjectEditPage };
//# sourceMappingURL=project-edit.js.map