import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blood-banks',
  templateUrl: './blood-banks.component.html',
  styleUrls: ['./blood-banks.component.css']
})
export class BloodBanksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bloodbanks =[
    {'id': 1, 'name':'SANJEEVANI BLOOD BANK','Address':'2nd Floor, Shinde Grand, above Saraswat Bank, Bhosari, Pune, Maharashtra 411039','image':"../../assets/sanjeevni.webp"},
    {'id': 2, 'name':'Victoria Hospital Blood Bank','Address':'53-714, 1st Main Rd, New Tharagupet, Bengaluru, Karnataka 560002','image':'../../assets/victoria.webp'},
    {'id': 3, 'name':'Blood Bank, G.B. Pant Hospital', 'Address':'Atlanta Point, Port Blair, Andaman and Nicobar Islands 744104','image':'../../assets/andaman.png'},
    {'id': 4, 'name':'Blood Bank, Government Kasturba Gandhi Hospital for Women and Children','Address':'Ward 114, Teynampet, Zone 9, Teynampet, Chennai, Tamil Nadu 600008','image':'../../assets/Chennai.jpg'},
    {'id': 5, 'name':'Blood Bank, Government Maternity Hospital','Address':'Nayapool, Hyderabad','image':'../../assets/hyd.jpg'},
    {'id': 6, 'name':'Blood Bank, Deptt. of Transfusion Medicine','Address':'PGIMER Chandigarh','image':'../../assets/chandigarh.jpg'},
    {'id': 7, 'name':'Blood Bank, Chittaranjan National Cancer Institute','Address':'Kolkata, West Bengal','image':'../../assets/kolkata.jpg'},
    {'id': 8, 'name':'Blood Bank, Deen Dayal Upadhyay Hospital','Address':'New Delhi','image':'../../assets/delhi.jpg'},
    {'id': 9, 'name':'Blood Bank, Goa Medical College','Address':' Bambolin, Goa','image':'../../assets/goa.jpg'},


    {'id': 10, 'name':'Blood Bank, Government Hospital','Address':'Mizoram, Aizwal','image':'../../assets/aizwal.jpg'},
    {'id': 11, 'name':'Blood Bank, General Hospital','Address':'Naharlagun, Itanagar, Papum Pare Distt, Arunachal Pradesh','image':'../../assets/ap.jpg'},
    {'id': 12, 'name':'Blood Bank, Kanaklata Civil Hospital','Address':'Tezpur, Distt. Sonitpur, Assam','image':'../../assets/assam.jpg'}


  ]

}
