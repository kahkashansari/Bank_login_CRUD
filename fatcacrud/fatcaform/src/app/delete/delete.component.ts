import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private apiserve:ApiService,private router:Router ,private activate:ActivatedRoute) { }

  ngOnInit(): void {
  //  var act=  this.activate.snapshot.params["id"]
  //  this.apiserve.deleteform('fatca/'+ act).subscribe((res:any)=>{
  //    console.log(res);
  //    this.router.navigate(['/show'])
  //  })
  }

}
