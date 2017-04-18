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
  Generated class for the ProjectAdd page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ProjectAddPage = (function () {
    function ProjectAddPage(navCtrl, navParams, projectService, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projectService = projectService;
        this.toast = toast;
        this.form = {
            projectCode: "",
            projectName: "",
            owner: "",
            location: "",
            projectStatus: "",
            startDate: "",
            endDate: ""
        };
    }
    ProjectAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectAddPage');
    };
    ProjectAddPage.prototype.addProject = function () {
        console.log(this.form["projectCode"]);
        this.projectService.createProject({
            projectCode: this.form["projectCode"],
            projectName: this.form["projectName"],
            owner: this.form["owner"],
            location: this.form["location"],
            projectStatus: this.form["projectStatus"],
            startDate: this.form["startDate"],
            endDate: this.form["endDate"]
        });
        this.toast.create({
            message: 'Record Added',
            duration: 9000
        }).present();
    };
    return ProjectAddPage;
}());
ProjectAddPage = __decorate([
    Component({
        selector: 'page-project-add',
        templateUrl: 'project-add.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        Project,
        ToastController])
], ProjectAddPage);
export { ProjectAddPage };
//# sourceMappingURL=project-add.js.map