import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Project} from '../../providers/project';
import { Network } from '@ionic-native/network';


/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  projects:any;

  constructor(
    public navCtrl: NavController,
    public projectService: Project,
    public alertCtrl:AlertController,
    private network: Network,
    private toast: ToastController
     ) {
    
  }

  displayNetworkUpdate(connectionState: string){
   let networkType =  this.network.type;
    this.toast.create({
      message: 'You are now' + ' ' +connectionState ,
      duration: 9000
    }).present();
  }

  ionViewDidEnter(){
    this.network.onConnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type); 
     this.projectService.backOnline();}
      ,error => console.error(error));
    this.network.onDisconnect().subscribe(data =>{
     console.log(data) 
     this.displayNetworkUpdate(data.type);

   },error => console.error(error));
  }

  ionViewDidLoad() {
    this.projectService.getProjects().then((data)=>{
      this.projects=data;
    });
    // console.log('ionViewDidLoad HomePage');

  }

  createProject(){
 
    let prompt = this.alertCtrl.create({
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
          handler: data => {
           this.projectService.createProject({
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
 
  }


updateProject(project){

  let prompt = this.alertCtrl.create({
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
        handler: data => {
          this.projectService.updateProject({
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
}

deleteProject(project){
  this.projectService.deleteProject(project);
}

}
