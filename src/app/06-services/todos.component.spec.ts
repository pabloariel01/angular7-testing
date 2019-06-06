import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, of, empty, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with items returned from server', () => {
    const todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.
      callFake(() => of(todos))
    component.ngOnInit();

    expect(component.todos).toEqual(todos);
  });

  it('should call the server to save the new todo is added', () => {
    let spy= spyOn(service, 'add').and.callFake(t => {
      return of();
    })

    component.add();

    expect(spy).toHaveBeenCalled();
  })

  it('should add the new todo retuned from the server', () => {
    let todo= {id:1}
    let spy =spyOn(service, 'add').and.returnValue(of(todo))

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  })
  it('should set the message if server returns error when adding todo', () => {
    const error=new Error('server error');
    let spy =spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toEqual(error);
  })

  it('should call a server to delete an item if the user confirms',()=>{
    spyOn(window,'confirm').and.returnValue(true);
    let spy =spyOn(service,'delete').and.returnValue(of());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1)
  })

  it('should NOT call a server to delete an item if the user confirms',()=>{
    spyOn(window,'confirm').and.returnValue(false);
    let spy =spyOn(service,'delete').and.returnValue(of());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  })

});