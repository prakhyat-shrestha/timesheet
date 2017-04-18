import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Project} from '../../providers/project';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the ProjectAdd page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-project-add',
  templateUrl: 'project-add.html'
})
export class ProjectAddPage {
	form:any;
  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				public projectService: Project,
  				private toast: ToastController
  				) {
  	this.form = {
  		projectCode: "",
  		projectName: "",
  		owner:"",
  		location:"",
  		projectStatus:"",
  		startDate:"",
  		endDate:""

  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectAddPage');
  }

  addProject(){
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
      message: 'Record Added' ,
      duration: 9000
    }).present();

  }



}
