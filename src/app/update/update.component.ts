import { Component, OnInit } from '@angular/core';
import { NewsrvService } from '../services/newsrv.service';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { employee } from '../services/employeeInf';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  constructor(private upsrv:NewsrvService,
    private _router:Router,
    private _activatedroute:ActivatedRoute,
    private _http: HttpClient) { }
  
  upemp:{};
  id: number;
  data:object={};
  emp:[];

  updateEmp(upEmp){
    this.upemp={
      id:upEmp.uid,
      name: upEmp.uname,
      salary: upEmp.usalary
    };
    

    this.upsrv.updatejsonData(this.id, this.upemp).toPromise().then(()=>{this._router.navigate(['/']);});
  }

  ngOnInit() {

    this._activatedroute.params.subscribe(pp=>{this.id=+pp['id'];});
    // this._activatedroute.snapshot.params(ll=>{this.id=ll['id']});

    // this.upsrv.getjsonData().subscribe(
    //   (res)=>{
    //     this.emp=res;
    //     for (var i=0;i<res.length;i++) {
    //       if(parseInt(emp[i].id) === this.id){
    //         this.data=res[i];
    //         break;
    //       }
    //     }
    //   }
    // );

  this._http.get("http://localhost:1234/emp").subscribe(
    (res:HttpResponse<employee[]>)=>{
      for (var i=0;Object.keys(res).length;i++) {
        if(parseInt(res[i].id) === this.id) {
          this.data=res[i];
          break;
        }
      }
    }
  );

    // this.upsrv.getjsonData().subscribe(
    //   data => {
    //     console.log(data);
    //     // if(data) {
    //     //   alert('User updated successfully.');
    //     //   this._router.navigate(['/']);
    //     // }else {
    //     //   alert('User not updated successfully.');
    //     // }
    //   }
    // );
  }
}
