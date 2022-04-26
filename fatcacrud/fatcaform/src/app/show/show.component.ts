import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  formdata:any

  constructor(private api:ApiService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    this.api.getform('fatca').subscribe((res)=>{
      console.log("get");
      
      this.formdata=res

    })
  }
  deletee(ans:any){
    this.api.deleteform('fatca/',ans).subscribe((res:any)=>{
      console.log(res);
     this.getdata()
    })

  }
 


  openDialog(ans:any) {
    console.log(ans.id);

    this.api.iteams.next(ans)
    const dialogRef = this.dialog.open(EditComponent);

    
  }

  
 

}
