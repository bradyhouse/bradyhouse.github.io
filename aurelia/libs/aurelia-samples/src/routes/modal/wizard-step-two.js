import {inject} from 'aurelia-framework';
import {WizardData} from 'routes/modal/wizard-data';

@inject(WizardData)
export class WizardStepTwo{
  constructor(wizard){
    this.wizard = wizard;
  }
}