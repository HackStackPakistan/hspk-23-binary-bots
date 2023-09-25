import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { GetStartedService } from './services/get-started.service';
import { Subject, takeUntil } from 'rxjs';
import { Route, Router } from '@angular/router';

interface StepsIndex {
  items: MenuItem[];
  index: number;
}

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
  standalone: true,
  imports: [StepsModule],
})
export class GetStartedComponent implements OnInit, OnDestroy {
  items: MenuItem[] | undefined;

  activeIndex: number = 1;

  destroyed: Subject<string> = new Subject<string>();

  constructor(
    public getStartedService: GetStartedService,
    public router: Router
  ) {

  }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  ngOnInit() {
    this.getStartedService.stepsItems.pipe(
      takeUntil(this.destroyed)
    ).subscribe((step: StepsIndex) => {
      this.items = step.items;
      this.activeIndex = step.index;

      this.router.navigateByUrl('get-started/' + this.items[this.activeIndex].routerLink);
    })
  }

  ngOnDestroy(): void {
    this.destroyed.next('');
    this.destroyed.complete();
  }
}
