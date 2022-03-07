import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data, DataResponse } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'giftastic';

  serchForm!:FormGroup;
  data!: Data[];

  constructor(private fb: FormBuilder, private dataService: DataService) {  }
  
  ngOnInit(): void {
    this.serchForm = this.fb.group({
      search: ['',[Validators.required]]
    });
    this.dataService.get("laughing").subscribe((res:DataResponse)=> {
      this.data = res.results;
    });
  }

  public onSubmit(){
    this.dataService.get(this.serchForm.value.search).subscribe((res:DataResponse)=> this.data = res.results);
    this.serchForm.reset();
  }
  public onClick(e:any){
    this.dataService.get(e.target.id).subscribe((res:DataResponse)=> this.data = res.results);
  }

}