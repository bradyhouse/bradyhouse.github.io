var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var Fiddle = (function () {
    function Fiddle() {
        this.value = 1;
    }
    Fiddle.prototype.increase = function () {
        this.value++;
    };
    Fiddle.prototype.decrease = function () {
        this.value--;
    };
    Fiddle.prototype.greaterThanFive = function () {
        return this.value > 5 ? true : false;
    };
    Fiddle = __decorate([
        angular2_1.Component({
            selector: 'fiddle-0005-NgIf'
        }),
        angular2_1.View({
            template: "\n    <div *ng-if=\"greaterThanFive()\">\n        It's greater than 5!\n    </div>\n    <hr/>\n    {{value}}\n    <hr />\n    <button (click)=\"increase()\">Increase</button>\n    <button (click)=\"decrease()\">Decrease</button>",
            directives: [angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], Fiddle);
    return Fiddle;
})();
angular2_1.bootstrap(Fiddle);
