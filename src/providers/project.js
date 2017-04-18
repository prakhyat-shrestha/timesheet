var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import PouchDB from 'pouchdb';
var Project = (function () {
    function Project(http) {
        this.http = http;
        this.db = new PouchDB('cloudo2');
        if (typeof window != "undefined") {
            window["PouchDB"] = PouchDB;
        }
        ;
        // *************You online ko lagi matra ho*******************
        this.remote = 'http://47.185.156.202:5984/cloudo2';
        var options = {
            live: true,
            retry: true,
            continous: true
        };
        this.db.sync(this.remote, options);
    }
    Project.prototype.getProjects = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.db.allDocs({
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.rows.map(function (row) {
                    _this.data.push(row.doc);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    Project.prototype.createProject = function (project) {
        this.db.post(project);
    };
    Project.prototype.updateProject = function (project) {
        this.db.put(project).catch(function (err) {
            console.log(err);
        });
    };
    Project.prototype.deleteProject = function (project) {
        this.db.remove(project).catch(function (err) {
            console.log(err);
        });
    };
    Project.prototype.backOnline = function () {
        console.log("hey connection is back");
    };
    Project.prototype.handleChange = function (change) {
        var changedDoc = null;
        var changedIndex = null;
        this.data.forEach(function (doc, index) {
            if (doc._id === change.id) {
                changedDoc = doc;
                changedIndex = index;
            }
        });
        //A document was deleted
        if (change.deleted) {
            this.data.splice(changedIndex, 1);
        }
        else {
            //A document was updated
            if (changedDoc) {
                this.data[changedIndex] = change.doc;
            }
            else {
                this.data.push(change.doc);
            }
        }
    };
    return Project;
}());
Project = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], Project);
export { Project };
//# sourceMappingURL=project.js.map