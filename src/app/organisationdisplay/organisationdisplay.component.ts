import { Component, OnInit } from '@angular/core';
import { Organisation } from './organisation';
import { OrganisationdataService } from './organisationdata.service';
import { Router } from "@angular/router";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-organisationdisplay',
  templateUrl: './organisationdisplay.component.html',
  styleUrls: ['./organisationdisplay.component.css']
})
export class OrganisationdisplayComponent implements OnInit {
  closeResult: string;
  updatedItem;

  org_name='';
  org_desc='';
  org_add1='';
  org_add2='';
  org_city='';
  org_state='';
  org_zip;
  org_country='';
  org_phone1;
  org_phone2;
  org_website='';
  org_fax='';
  arr:Organisation[]=[
    new Organisation('Tata cunsultancy services','Top It company in india','J P nagar','shetter colony','bangalore','Karnataka',565425,'India',9875434345,8765432143,'www.tata.com','233'),
    new Organisation('Wipro PVT LTD','IT Company','hebbal','shetter colony','bangalore','Karnataka',565425,'India',9875434345,8765432143,'www.wipro.com','233'),
    new Organisation('Sky cliff IT','Software products and services','gandhi nagar','shetter colony','dharwad','Karnataka',565425,'India',9875434345,8765432143,'www.skycliff.com','233'),
    new Organisation('Infosys','IT company','hebbal','shetter colony','bangalore','Karnataka',565425,'India',9875434345,8765432143,'www.infosys.com','233')

    ];
  _router: any;



  constructor(private data:OrganisationdataService,private router:Router,private modalService: NgbModal) { }

  ngOnInit() {
  }
  onOrganisationDelete(item:Organisation){

        var userPreference;
        if (confirm("Do you want to delete?") == true){
          this.arr.splice(this.arr.indexOf(item),1);
           alert('deleted successfully');
      }
      else {
        userPreference = "Save Cancelled!";
    }
  }

  onOrganisationEdit(item:Organisation)
  {
this._router.navigate(["/editorganisation",item.org_name]);
  }

  onSearch(value)
  {if (value != "") {

    this.arr = this.arr.filter(x => x.org_name.indexOf(value) != -1);

  }

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'},).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openEdit(content1, i) {
    console.log(i);
    this.org_name = this.arr[i].org_name;
    this.org_desc=  this.arr[i].org_desc;
    this.org_add1=  this.arr[i].org_add1;
    this.org_add2=  this.arr[i].org_add2;
    this.org_city=  this.arr[i].org_city;
    this.org_state=  this.arr[i].org_state;

    this.org_zip=  this.arr[i].org_zip;
    this.org_country=  this.arr[i].org_country;
    this.org_phone1=  this.arr[i].org_phone1;
    this.org_phone2=  this.arr[i].org_phone2;
    this.org_website=  this.arr[i].org_website;
    this.org_fax=  this.arr[i].org_fax;

    this.updatedItem = i;
    console.log(this.org_name);
    this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  // // open1(contents,comingfrom,item.org_name) {
  // //   this.modalService.open(contents, {ariaLabelledBy: 'modal-basic-title'},).result.then((result) => {
  // //     this.closeResult = `Closed with: ${result}`;
  // //   }, (reason) => {
  // //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  // //   });
  // // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }


  // openEdit(contents, item) {
  //   console.log(item);
  //   this.org_name = this.arr[item].org_name;
  //   this.org_desc= this.arr[item].org_desc;
  //   this.org_add1=this.arr[item].org_add1;
  //   this.org_add2= this.arr[item].org_add2;
  //   this.org_city= this.arr[item].org_city;
  //   this.org_state= this.arr[item].org_state;

  //   this.org_zip= this.arr[item].org_zip;
  //   this.org_country= this.arr[item].org_country;
  //   this.org_phone1= this.arr[item].org_phone1;
  //   this.org_phone2= this.arr[item].org_phone2;
  //   this.org_website= this.arr[item].org_website;
  //   this.org_fax= this.arr[item].org_fax;
  //   console.log('updating');
  //   console.log(this.org_name);
  //   this.modalService
  //     .open(contents, { ariaLabelledBy: 'modal-basic-title' }).result.then(result => {
  //         this.closeResult = `Closed with: ${result}`;
  //       },
  //       reason => {
  //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //       }
  //     );
  // }
  // open1(contents,comingfrom,item.org_name) {
  //   this.modalService.open(contents, {ariaLabelledBy: 'modal-basic-title'},).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }





  onAddOrg() {
    this.arr.push(new Organisation(this.org_name,this.org_desc,this.org_add1,this.org_add2,this.org_city,this.org_state,this.org_zip,this.org_country,this.org_phone1,this.org_phone2,this.org_website,this.org_fax));
    alert("Added Successfully");

  }


  // onEditOrg(f){
  //    alert("Updated");

  //   // this.org_name=this.org_name;
  //   // UpdateItem() {
  //     //console.log(f.value);
  //     let data = this.updatedItem;
  //     // console.log(data);
  //     // alert(this.arrDesig.length);
  //     for (let i = 0; i < this.arr.length; i++) {
  //       // tslint:disable-next-line: triple-equals
  //       if (i == data) {
  //         this.org_name = f.value.org_name;
  //         this.arr[i].org_desc = f.value.org_desc ;
  //         console.log(this.arr);


  //       }
  //     }

  //   }
    UpdateItem() {
      //console.log(f.value);
      let data = this.updatedItem;
      // console.log(data);
      // alert(this.arrDesig.length);
      for (let i = 0; i < this.arr.length; i++) {
        if (i == data) {
          this.arr[i].org_name= this.org_name;
          this.arr[i].org_desc = this.org_desc;
          this.arr[i].org_add1 = this.org_add1;
          this.arr[i].org_add2 = this.org_add2;
          this.arr[i].org_city = this.org_city;
          this.arr[i].org_state = this.org_state;
          this.arr[i].org_zip = this.org_zip;
          this.arr[i].org_country = this.org_country;

          this.arr[i].org_website = this.org_website;
          this.arr[i].org_phone1 = this.org_phone1;
          this.arr[i].org_phone2 = this.org_phone2;
          this.arr[i].org_fax = this.org_fax;
          console.log(this.arr);

          this.org_name='';
          this.org_desc='';
          alert('Updated Successfully');
        }
      }

    }

    // this._data.editOrg(this.org_name,f.value).subscribe(
    //   (data:any)=>{
    //     alert('updated');
    //   }
    // );
}


