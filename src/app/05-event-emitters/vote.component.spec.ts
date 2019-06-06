import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should reise votechange envent when upvoted', () => {
    let totalvotes=null;
    component.voteChanged.subscribe(tv=> totalvotes=tv);

    component.upVote();

    expect(totalvotes).toBe(1);
  });
});