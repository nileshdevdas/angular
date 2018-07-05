import {Injectable} from '@angular/core';
// this is the subject on which you will publish and subscribe
import {Subject} from 'rxjs/Subject';
@Injectable()
export class MessageService {
  // create a subject instance
  private subject = new Subject<any>();
  // method called sendEvent
  sendEvent(payload:any){
  // the next methods send the events ....
      this.subject.next(payload);
  }
  // my subscriber method
  subscribeEvent(){
      return this.subject.asObservable();
  }
}
