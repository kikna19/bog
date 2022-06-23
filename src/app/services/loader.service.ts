import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading = 0;

  constructor() {
  }

  showLoading() {
    this.loading = 1;
  }

  endLoading() {
    this.loading = 0;
  }

  useLoading = <T>(obs: Observable<T>): Observable<T> => {
    this.showLoading();
    return obs.pipe(finalize(() => this.endLoading()));
  }
}
