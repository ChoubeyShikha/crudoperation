import { Component, OnInit } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { NewsrvService } from '../services/newsrv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _newsrv: NewsrvService) { }
  private _headersHome= new HttpHeaders({'Content-Type':'application/json'});
  data= [];
  emp={};
    
  showData(){
    
    this._newsrv.getjsonData().subscribe(m=>this.data=m);
    // this._newsrv.postjsonData(this.emp).subscribe(hero => this.data.push(hero));
  }
  
  deleteEmp(id){
    if(confirm("Are you sure want to delete?")){
     // print();
     return this._newsrv.deletejsonData(id).then(()=>{this.showData();})
   }
  }
  
  ngOnInit() {
    this.showData();
    
  }

}
