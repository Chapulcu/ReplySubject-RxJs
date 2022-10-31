import { Component, OnInit, VERSION } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  ngOnInit():void{

    let data:any='Talip';

    // özelleştirilmiş bie obsorvable olarak düşünülebilir...
    // Replay subject tanımlanırken kaç tane geriden alabileceğimizi tanımlarız
    const subject = new ReplaySubject(2);

    subject.subscribe(veri=>{console.log(`ObsorverA ${veri}`)});
    subject.subscribe(veri=>{console.log(`ObsorverB ${veri}`)});

    subject.next(3);
    subject.next(4);
// Araya yani 4 ten sonraya subscibe olundu ve consolda sonucu görülüyor...
    subject.subscribe(veri=>{console.log(`ObsorverC ${veri}`)});
    subject.next(5);
    subject.next(7);
    subject.next('Talip');


  }
}