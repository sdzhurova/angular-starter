import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class MediaService {
  public query: string;
  public platform: Observable<string>;

  private queries = {
    mobile: '(min-width: 260px)',
    tablet: '(min-width: 760px)',
    desktop: '(min-width: 980px)',
    ['only mobile']: '(max-width: 759px)',
    ['only tablet']: '(min-width: 760px) and (max-width: 979px)',
  };

  constructor() {
    this.platform = new Observable<string>((observer: Observer<string>) => {
      Object.keys(this.queries).forEach(key => {
        this.getMedia(key).subscribe(state => {
          if (state) {
            observer.next(key);
            this.query = key;
          }
        });
      });
    });
    this.platform.subscribe(() => { });
  }

  getMedia(type: string): Observable<boolean> {
    const not = type.indexOf('not') > -1;
    const query = not ? type.replace('not', 'only') : type;

    return new Observable<boolean>((observer: Observer<boolean>) => {
      const mediaQuery = this.queries[query];
      if (!mediaQuery) {
        observer.error(null);
      }
      const mql: MediaQueryList = window.matchMedia(mediaQuery);
      observer.next(not ? !mql.matches : mql.matches);

      mql.addListener((mqlist: MediaQueryList) => {
        observer.next(not ? !mqlist.matches : mqlist.matches);
      });
    });
  }
}
