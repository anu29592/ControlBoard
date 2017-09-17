import { EventEmitter,Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {AppSettings} from './settings/app.settings';

declare var xml2json: any;

@Injectable()
export class AppComponentService {
    public appComponentChanged = new EventEmitter<Object>();
    header: Headers;
    constructor(private http : Http){
        this.header = new Headers();
		    this.header.append('Content-Type', 'application/xml');
        
    }
    
    public getLayouts(selectedConfig:string){
        var hostUrl = (window.location.protocol + '//' + window.location.host).replace("http://", "");
        var serviceUrl = AppSettings.API_ENDPOINT + "/getLayouts?clientURL=" + hostUrl + "&nameModule=" + selectedConfig;
        return this.http.get(serviceUrl, this.header)
            .map(this.extractData)
            .catch(this.handleError);
  }

  private extractData(res: Response) {
  return JSON.parse(xml2json(res.text(),'  ')).ViewData.AndonAllData.AndonAllData;
  //return "";
}

private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return errMsg;
}


}