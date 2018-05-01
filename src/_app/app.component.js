import { Component } from '@angular/core';
// import './app.scss';
require('./app.scss');

@Component({
  selector: 'app-root',
  // templateUrl: '/src/_app/app.html',
  template: require('./app.html')
})
export default class appComponent{
    title = 'app';
    constructor() {

    }
}