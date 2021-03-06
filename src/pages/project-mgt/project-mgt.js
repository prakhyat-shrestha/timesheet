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
import { NavController, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Project } from '../../providers/project';
import { ProjectEditPage } from '../project-edit/project-edit';
import { ProjectAddPage } from '../project-add/project-add';
import { Network } from '@ionic-native/network';
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ProjectMgtPage = (function () {
    function ProjectMgtPage(navCtrl, projectService, alertCtrl, network, toast) {
        //this.project.test = "test string";
        //console.log(this.project.test);
        this.navCtrl = navCtrl;
        this.projectService = projectService;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.toast = toast;
    }
    ProjectMgtPage.prototype.displayNetworkUpdate = function (connectionState) {
        // let networkType =  this.network.type;
        this.toast.create({
            message: 'You are now' + ' ' + connectionState,
            duration: 9000
        }).present();
    };
    ProjectMgtPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.network.onConnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetworkUpdate(data.type);
            _this.projectService.backOnline();
        }, function (error) { return console.error(error); });
        this.network.onDisconnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.error(error); });
    };
    ProjectMgtPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.projectService.getProjects().then(function (data) {
            _this.projects = data;
        });
        // console.log('ionViewDidLoad HomePage');
    };
    ProjectMgtPage.prototype.createProjectNew = function () {
        this.navCtrl.push(ProjectAddPage);
    };
    ProjectMgtPage.prototype.createProject = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Add',
            message: 'Add Project',
            inputs: [
                {
                    name: 'code',
                    placeholder: 'Project Code'
                },
                {
                    name: 'name',
                    placeholder: 'Project Name'
                },
                {
                    name: 'owner',
                    placeholder: 'Project Owner'
                },
                {
                    name: 'location',
                    placeholder: 'Project Location'
                },
                {
                    name: 'status',
                    placeholder: 'Project Status'
                },
                {
                    name: 'startDate',
                    placeholder: 'Project Start Date'
                },
                {
                    name: 'endDate',
                    placeholder: 'Project End Date'
                }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.projectService.createProject({
                            projectCode: data.code,
                            projectName: data.name,
                            owner: data.owner,
                            location: data.location,
                            projectStatus: data.status,
                            startDate: data.startDate,
                            endDate: data.endDate
                        });
                        //console.log('save clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ProjectMgtPage.prototype.updateProjectNew = function (project) {
        this.navCtrl.push(ProjectEditPage, project);
    };
    ProjectMgtPage.prototype.updateProject = function (project) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Edit',
            message: 'Update Project ?',
            inputs: [
                {
                    name: 'code',
                    value: project.projectCode,
                },
                {
                    name: 'name',
                    value: project.projectName
                },
                {
                    name: 'owner',
                    value: project.owner
                },
                {
                    name: 'location',
                    value: project.location
                },
                {
                    name: 'status',
                    value: project.projectStatus
                },
                {
                    name: 'startDate',
                    value: project.startDate
                },
                {
                    name: 'endDate',
                    value: project.endDate
                }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.projectService.updateProject({
                            _id: project._id,
                            _rev: project._rev,
                            projectCode: data.code,
                            projectName: data.name,
                            owner: data.owner,
                            location: data.location,
                            projectStatus: data.status,
                            startDate: data.startDate,
                            endDate: data.endDate
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    ProjectMgtPage.prototype.deleteProject = function (project) {
        this.projectService.deleteProject(project);
    };
    return ProjectMgtPage;
}());
ProjectMgtPage = __decorate([
    Component({
        selector: 'page-project-mgt',
        templateUrl: 'project-mgt.html'
    }),
    __metadata("design:paramtypes", [NavController,
        Project,
        AlertController,
        Network,
        ToastController])
], ProjectMgtPage);
export { ProjectMgtPage };
//# sourceMappingURL=project-mgt.js.map