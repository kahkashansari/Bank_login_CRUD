import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-fatca',
  templateUrl: './fatca.component.html',
  styleUrls: ['./fatca.component.css']
})
export class FatcaComponent implements OnInit {
  fatcaform:any
  teams: any[] = [
    { name: 'india' },
    { name: 'usa' },
    { name: 'china' },
   
];


  constructor(private fb:FormBuilder, private apiserve:ApiService , private router:Router) { }

  ngOnInit(): void {
    this.fatcaform=this.fb.group({
      taxcountry:['',[Validators.required]],
      tin:['',[Validators.required]],
      identificationtype:['',[Validators.required]],
      nameofentitytype:['',[Validators.required]],
      giin:['',[Validators.required]],
      sponsoringentity:['',[Validators.required]],
      giinnotavailable:['',[Validators.required]],
      notrequiedtoapplyforthesubcategory:['',[Validators.required]],
     company:['',[Validators.required]],
     relatedentity:['',[Validators.required]],
     nfe:['',[Validators.required]],
     nameofthestockexchange:['',[Validators.required]],
     nameofthepubliclytadecompany:['',[Validators.required]],
     natureofbusiness:['',[Validators.required]],
     subcategory:['',[Validators.required]],
     controllingpersonname:['',[Validators.required]],
     countryoftaxresidency:['',[Validators.required]],
     mobileno:['',[Validators.required,Validators.pattern("[789][0-9]{9}")]],
     addresstype:['',[Validators.required]],
     line1:['',[Validators.required]],
     pincode:['',[Validators.required]],
     line2:['',[Validators.required]],
     area:['',[Validators.required]],
     line3:['',[Validators.required]],
     country:['',[Validators.required]],
     city:['',[Validators.required]],
     district:['',[Validators.required]],
     state:['',[Validators.required]],
     identification:['',[Validators.required]],
     TIN:['',[Validators.required,Validators.pattern("[0-9]{2}[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}")]],
     other:['',[Validators.required]],
     controllingpesontypecode:['',[Validators.required]],
     cid:['',[Validators.required]],
     occupationtype:['',[Validators.required]],
     specifyotheroccupation:['',[Validators.required]],
     gender:['',[Validators.required]],
     cityofbirth:['',[Validators.required]],
     countryofbirth:['',[Validators.required]],
     nationality:['',[Validators.required]],
     Pan:['',[Validators.required,Validators.pattern('[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}')]],
     dob:['',[Validators.required]],
     fathername:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
     spousename:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
     aadharno:['',[Validators.required,Validators.pattern('[1-9]{1}[0-9]{11}'),Validators.pattern("[0-9]+")]],
     identificationtype2:['',[Validators.required]],
     identificationnumber:['',[Validators.required]], 
    })
  }
  Haserror(control:any,error:any){
    return this.fatcaform.get(control).hasError(error)
  }
  onsubmit(){
    // console.log(this.fatcaform.value);
    var data=this.fatcaform.value;
    this.apiserve.postform('fatca',data).subscribe((res)=>{
      console.log(res); 
    })
    this.router.navigate(['/show'])
  

  }
 

 

}
