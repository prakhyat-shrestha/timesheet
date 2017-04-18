import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import PouchDB from 'pouchdb';

@Injectable()
export class Project {
    data: any;
    db: any;
    remote: any;

    constructor(public http: Http) {
        this.db = new PouchDB('cloudo2');
        if (typeof window != "undefined") {window["PouchDB"] = PouchDB};
        // *************You online ko lagi matra ho*******************
        this.remote='http://47.185.156.202:5984/cloudo2';
        let options ={
            live:true,
            retry:true,
            continous:true
        };

        this.db.sync(this.remote, options);
    }

    getProjects() {
        if (this.data) {
            return Promise.resolve(this.data);
        }


        return new Promise(resolve => {
            this.db.allDocs({
                include_docs:true
            }).then((result)=>{
                this.data=[];

                let docs=result.rows.map((row)=>{
                    console.log(row.doc);
                    this.data.push(row.doc);
                });

                resolve(this.data);

                this.db.changes({live:true, since:'now', include_docs:true}).on('change', (change)=>{
                    this.handleChange(change);
                });
            }).catch((error)=>{
                console.log(error);
            });
        });
    }

    createProject(project){
        this.db.post(project);
    }

        updateProject(project){
      this.db.put(project).catch((err) => {
        console.log(err);
      });
    }

        deleteProject(project){
      this.db.remove(project).catch((err) => {
        console.log(err);
      });
    }

    backOnline(){
        console.log("hey connection is back");
    }



    handleChange(change){
        let changedDoc=null;
        let changedIndex=null;

        this.data.forEach((doc,index)=>{
            if(doc._id===change.id)
            {
                changedDoc=doc;
                changedIndex=index;
            }
        });

        //A document was deleted
  if(change.deleted){
    this.data.splice(changedIndex, 1);
  } 
  else {
 
    //A document was updated
    if(changedDoc){
      this.data[changedIndex] = change.doc;
    } 
 
    //A document was added
    else {
      this.data.push(change.doc); 
    }
   }

 }

//Unit type Add
 createUnitType(type){
        this.db.post(type);
    }

 getUnitType() {
        if (this.data) {
            return Promise.resolve(this.data);
        }


        return new Promise(resolve => {
            this.db.query(function(doc1,emit){
                emit(doc1.type,doc1.unitTypeName);
            }, {key:'unitType'}).then((result)=>{
                this.data=[];

                let docs=result.rows.map((row)=>{
                    console.log(row);
                   // console.log(row.doc);
                    this.data.push(row);
                });

                resolve(this.data);

                this.db.changes({live:true, since:'now', include_docs:true}).on('change', (change)=>{
                    this.handleChange(change);
                });
            }).catch((error)=>{
                console.log(error);
            });
    });

    }
}
