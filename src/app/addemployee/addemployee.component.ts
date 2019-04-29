import { Component, OnInit } from '@angular/core';
import {NewsrvService} from '../services/newsrv.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  emp={};
  constructor(private addempsrv: NewsrvService, private _router:Router) { }
  addEmployee(empdata){
    this.emp={
      id: empdata.id,
      name: empdata.name,
      salary: empdata.salary
    };
    this.addempsrv.postjsonData(this.emp).subscribe(()=>{this._router.navigate(['/']);});
  }
    
  ngOnInit() {
  }

}
