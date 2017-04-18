import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Project} from '../../providers/project';
import {ProjectMgtPage} from '../project-mgt/project-mgt';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the ProjectEdit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-project-edit',
  templateUrl: 'project-edit.html'
})
export class ProjectEditPage {

  myProject = {
    
  };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
               public projectService: Project,
                private toast: ToastController) {

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
    }

   // console.log(this.myProject.test);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ProjectEditPage');
    console.log(this.navParams.get('projectCode'));

  }


  updateProj(){

  console.log(this.myProject["projectCode"]);


 this.projectService.updateProject({
            _id: this.myProject["id"],
            _rev: this.myProject["rev"],
            projectCode: this.myProject["projectCode"],
             projectName:this.myProject["projectName"],
              owner: this.myProject["owner"],
              location: this.myProject["location"],
              projectStatus: this.myProject["projectStatus"],
              startDate: this.myProject["startDate"],
             endDate: this.myProject["endDate"]
          });

      this.toast.create({
      message: 'Record Updated' ,
      duration: 9000
    }).present();
   }























}
