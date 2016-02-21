import * as angular from 'angular';

const Root = {
  bindings: {},
  template: `<h1>Hello {{$ctrl.name}}!</h1>`,
  controller: function RootCtrl() {
    this.name: string = 'World'
  }
}

const app = angular.module('App', [])
  .component('root', Root);

export { app };