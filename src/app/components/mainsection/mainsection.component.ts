import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarouselComponent } from 'src/app/widgets/carousel/carousel.component';

@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.scss']
})
export class MainsectionComponent implements OnInit {

  myForm!: FormGroup;
  formStatus: boolean = false;
  autoSlideFlag: boolean = true;

  images = [
    {
      ImageSrc: "../../../assets/img/Image-1.jpg",
      ImageAlt: "Image-1"
    },
    {
      ImageSrc: "../../../assets/img/Image-2.jpg",
      ImageAlt: "Image-2"
    },
    {
      ImageSrc: "../../../assets/img/Image-3.jpg",
      ImageAlt: "Image-3"
    },
    {
      ImageSrc: "../../../assets/img/Image-4.jpg",
      ImageAlt: "Image-4"
    },
    {
      ImageSrc: "../../../assets/img/Image-5.jpg",
      ImageAlt: "Image-5"
    },
]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      emailaddress: ['', [Validators.required, Validators.email]],
      contactno: ['', [Validators.required, Validators.maxLength(10)]],
      appointmentdate: ['', Validators.required],
      appointmenttime: ['', Validators.required]
    })
  }

  onSubmit(form: FormGroup){
    if(form.status == "VALID"){
      console.log(form.value);
      this.formStatus = false
    } else {
      this.formStatus = true
      console.error(`Form Status is ${form.status}`);
    }
  }

}
