import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component : VoteComponent;
  beforeEach(()=>{
     component =new VoteComponent();
     
    
  })
  it('should incrementtotal votes when upvoted', () => {
    component.upVote()
    expect(component.totalVotes).toBe(1)
  });
  it('should decrementtotal votes when upvoted', () => {
    component.downVote()
    expect(component.totalVotes).toBe(-1)
  });


});