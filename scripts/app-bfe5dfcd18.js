!function(){"use strict";angular.module("listaDeCosasPorHacerAngular1X",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ngMaterial","toastr"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Stylus",url:"http://learnboost.github.io/stylus/",description:"Stylus is a revolutionary new language, providing an efficient, dynamic, and expressive way to generate CSS. Supporting both an indented syntax and regular CSS style.",logo:"stylus.png"}];this.getTec=t}angular.module("listaDeCosasPorHacerAngular1X").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("listaDeCosasPorHacerAngular1X").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,n,a,o){var r,i=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),r=e.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){r()})}function n(t,e){function n(){return a().then(function(){t.info("Activated Contributors View")})}function a(){return e.getContributors(10).then(function(t){return o.contributors=t,o.contributors})}var o=this;o.contributors=[],n()}n.$inject=["$log","githubContributor"];var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:n,controllerAs:"vm"};return a}t.$inject=["malarkey"],angular.module("listaDeCosasPorHacerAngular1X").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function n(n){function o(t){return t.data}function r(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return n||(n=30),e.get(a+"/contributors?per_page="+n).then(o)["catch"](r)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:a,getContributors:n};return o}t.$inject=["$log","$http"],angular.module("listaDeCosasPorHacerAngular1X").factory("githubContributor",t)}(),function(){"use strict";function t(){var t=this;t.addThing="",t.things=["Comprar leche","Pagar Netflix"],t.completed=["Pagar el colegio","Comprar SOAT"],t.addThingFunction=function(){t.addThing&&(t.things.push(t.addThing),t.addThing="")},t.completeThing=function(e){var n=t.things[e];t.things.splice(e,1),t.completed.push(n)},t.deleteThing=function(e){t.completed.splice(e,1)},t.makeItThing=function(e){var n=t.completed[e];t.completed.splice(e,1),t.things.push(n)}}angular.module("listaDeCosasPorHacerAngular1X").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("listaDeCosasPorHacerAngular1X").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("listaDeCosasPorHacerAngular1X").config(t)}(),function(){"use strict";angular.module("listaDeCosasPorHacerAngular1X").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e,n){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0,n.theme("default").primaryPalette("blue").accentPalette("blue-grey")}t.$inject=["$logProvider","toastrConfig","$mdThemingProvider"],angular.module("listaDeCosasPorHacerAngular1X").config(t)}(),angular.module("listaDeCosasPorHacerAngular1X").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="allContainer" layout="column" layout-align="center center" layout-fill=""><md-content class="mainContainer" flex="none"><div class="thingToDoTitle"><h1>{{ "Lista de tareas por hacer" | uppercase }}</h1></div><form class="form" name="thingForm" ng-submit="main.addThingFunction()" layout="column" layout-align="center center" flex="nogrow"><md-input-container><label>Añadir tarea</label> <input type="text" name="addThing" ng-model="main.addThing" md-maxlength="30"><div ng-messages="thingForm.addThing.$error" flex="nogrow"><div ng-message="md-maxlength">Tu tarea debe ser menor de 30 caracteres.</div></div></md-input-container><md-button class="md-primary md-raised" type="submit"><md-icon>assignment</md-icon>Añadir tarea</md-button></form><div class="thingsToDo content" flex="70"><div class="thingToDo md-whiteframe-1dp" ng-repeat="thing in main.things track by $index" layout="row" layout-align="start center"><p layout="row" layout-align="center center" flex="75">{{thing}}</p><div class="buttons" layout="row" layout-align="end center" flex="20"><md-button class="md-icon-button" ng-click="main.completeThing($index)"><md-tooltip md-direction="right" md-delay="0">Completar tarea</md-tooltip><md-icon>check</md-icon></md-button></div></div></div><div class="completeTitle" layout="row" layout-align="center center"><h2>{{"Lista de tareas completadas" | uppercase}}</h2></div><div class="thingsCompleted content" flex="70"><div class="thingCompleted md-whiteframe-1dp" ng-repeat="completed in main.completed track by $index" layout="row" layout-align="start center"><p layout="row" layout-align="center center" flex="75">{{completed}}</p><div class="buttons" layout="row" layout-align="end center" flex="20"><md-button class="md-icon-button" ng-click="main.deleteThing($index)"><md-tooltip md-direction="right" md-delay="0">Eliminar tarea</md-tooltip><md-icon>deleted</md-icon></md-button><md-button class="md-icon-button" ng-click="main.makeItThing($index)"><md-tooltip md-direction="right" md-delay="0">Marcar como no completada</md-tooltip><md-icon>assignment</md-icon></md-button></div></div></div></md-content></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button class="acme-navbar-text">Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-bfe5dfcd18.js.map
