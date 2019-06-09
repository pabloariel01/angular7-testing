import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        VoterComponent
      ]
    })

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;

  });

  it('should render total votes', () => {
    component.othersVote=20;
    component.myVote=1;

    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement=de.nativeElement;

    expect(el.innerText).toContain('21')
  });
  it('it should higlight the botton if upvoted', () => {
    component.myVote=1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    
    expect(de.classes['highlighted']).toBeTruthy();
    
    
  });
  it('should increse totalvotes when click the vote button', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click',null);

    expect(component.totalVotes).toBe(1);
  });
});
