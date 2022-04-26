import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editform:any;
  id:any

  constructor(private activate:ActivatedRoute,private api:ApiService, private route:Router,private fb:FormBuilder ,public dialog: MatDialog) { 

  }
  ngOnInit(): void {
    this.editform=this.fb.group({
      city:['',[Validators.required]],
      company:['',[Validators.required]],
      fathername:['',[Validators.required]],
      gender:['',[Validators.required]],
      mobileno:['',[Validators.required]],
      Pan:['',[Validators.required]],
    })
    this.api.iteams.subscribe((res:any)=>{ 
      console.log(res);
      this.id=res["id"]
      this.editform.get('city').setValue(res['city'])
      this.editform.get('company').setValue(res['company']) 
      this.editform.get('fathername').setValue(res['fathername']) 
      this.editform.get('gender').setValue(res['gender']) 
      this.editform.get('mobileno').setValue(res['mobileno']) 
      this.editform.get('Pan').setValue(res['Pan']) 
    })

  }
  update(){
 console.log(this.editform.value);
 this.editform.preventDefault();
    this.api.updateData(`fatca/${this.id}` , this.editform.value).subscribe((res:any)=>{
      console.log(res);
   
      this.dialog.closeAll()
    })
  }

  
  
  

}

