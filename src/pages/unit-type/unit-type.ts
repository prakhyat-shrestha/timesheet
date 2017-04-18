import { Component } from '@angular/core';
import { Project} from '../../providers/project';
import { NavController, NavParams, AlertController} from 'ionic-angular';



/*
  Generated class for the UnitType page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-unit-type',
  templateUrl: 'unit-type.html'
})
export class UnitTypePage {
	unitTypes:any;
 // counter:any = 1;
  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public projectService: Project,
   public alertCtrl:AlertController,
) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitTypePage');
     this.projectService.getUnitType().then((data)=>{
      this.unitTypes=data;
      
      
      
      //console.clear();
     // console.log(data);
  });
}


createUnitType(){
 
    let prompt = this.alertCtrl.create({
      title: 'Add Unit Type',
      //message: 'Add Unit Type',
      inputs: [
        {
          name: 'unitType',
          placeholder: 'Unit Type'

       }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
           this.projectService.createUnitType({
             unitTypeName: data.unitType,
             type: "unitType",            
           });
           //console.log('save clicked');
          }
        }
      ]
    });
 
    prompt.present();
 
  }
}
