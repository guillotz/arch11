import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';



@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, AfterViewChecked {

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  mostrar? : boolean = false;
  constructor(private loaderService: LoaderService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe(data => {
      this.mostrar = data;
    });
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }

}
