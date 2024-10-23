let pronoun = ['the', 'our', 'his'];
  let adj = ['great', 'big', 'amazing' ];
  let noun = ['jogger', 'racoon'];
  
  
  for(let i = 0; i < pronoun.length; i++) {
    for(let i = 0; i < adj.length; i++) {
      for(let i = 0; i < noun.length; i++) {
        console.log(pronoun[i] + adj[i] + noun[i]+'.com'); 
      }
    }
  }