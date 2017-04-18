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
import { NavController, NavParams, AlertController } from 'ionic-angular';
/*
  Generated class for the UnitType page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var UnitTypePage = (function () {
    function UnitTypePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    UnitTypePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnitTypePage');
    };
    UnitTypePage.prototype.createUnitType = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Add',
            message: 'Add Unit Type',
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
                    handler: function (data) {
                        _this.projectService.createUnitType({
                            unitTypeName: data.unitType
                        });
                        //console.log('save clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    return UnitTypePage;
}());
UnitTypePage = __decorate([
    Component({
        selector: 'page-unit-type',
        templateUrl: 'unit-type.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AlertController])
], UnitTypePage);
export { UnitTypePage };
//# sourceMappingURL=unit-type.js.map