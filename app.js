let pronoun = ['the', 'our', 'your', 'his', 'her'];
let adj = ['great', 'big', 'bold', 'fine', 'critical', 'ridiculous', 'flying', 'shocking', 'astonishing', 'incredible', 'logical', 'nasty'];
let noun = ['jogger', 'racoon', 'killer', 'grasshoper', 'muffin', 'pie', 'zoo', 'museum', 'money'];
let tld = ['net', 'com', 'co.uk', 'biz', 'market', 'ninja', 'boo', 'coffee', 'quest', 'repair', 'shiksha', 'shoes', 'wang' ]


for(let i = 0; i < 10; i++) {
    const randomPronoun = Math.floor(Math.random() * pronoun.length);
    const randomAdj = Math.floor(Math.random() * adj.length);
    const randomNoun = Math.floor(Math.random() * noun.length);
    const randomTld = Math.floor(Math.random() * tld.length);

    
 
    if (randomTld){
       var domain = pronoun[randomPronoun].concat(adj[randomAdj],noun[randomNoun],'.',tld[randomTld]) ;
           
      } 
   
      if (randomTld === 3 || randomTld === 4 || randomTld === 5 || randomTld === 6 || randomTld === 7|| randomTld === 8 || randomTld === 9 || randomTld === 10 || randomTld === 11 || randomTld === 12) {
        domain = pronoun[randomPronoun].concat(adj[randomAdj],'.',tld[randomTld]);
      }

     
 
        console.log(domain)
   
  }
