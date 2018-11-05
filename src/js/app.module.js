'use strict';

import Angular from 'angular';
import DetectComponent from './detect/detect.component';
import FooterComponent from './footer/footer.component';
import NavbarComponent from './navbar/navbar.component';
import TableComponent from './table/table.component';

/**
 * @function intialization AngularJS application
 */
Angular.module('app', [
  NavbarComponent,
  TableComponent,
  DetectComponent,
  FooterComponent
]);
