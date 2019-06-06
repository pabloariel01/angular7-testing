import { TodoFormComponent } from './todo-form.component'; 
import { FormBuilder } from '@angular/forms';
describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder()); 
  });

  it('it should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should check name is required', () => {
    let control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});