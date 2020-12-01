

# Good Morning / Afternoon Programmers!
  

You have made a call to a .gif API and recieved the following response called 'data.data' (It is part of a larger response):

````
Array(10)
0: {type: "gif", id: "4RlmBiZTX4CD6", url: "https://giphy.com/gifs/guinea-pig-4RlmBiZTX4CD6", slug: "guinea-pig-4RlmBiZTX4CD6", bitly_gif_url: "https://gph.is/1a4SKuP", …}
1: {type: "gif", id: "pNiDRNtb9yWdi", url: "https://giphy.com/gifs/lol-eating-humor-pNiDRNtb9yWdi", slug: "lol-eating-humor-pNiDRNtb9yWdi", bitly_gif_url: "https://gph.is/1UPmXPk", …}
2: {type: "gif", id: "13l9U2lMM0BdTy", url: "https://giphy.com/gifs/guinea-pig-13l9U2lMM0BdTy", slug: "guinea-pig-13l9U2lMM0BdTy", bitly_gif_url: "https://gph.is/2eBzygQ", …}
3: {type: "gif", id: "UwBXS6Hn3IRz2", url: "https://giphy.com/gifs/guinea-pig-UwBXS6Hn3IRz2", slug: "guinea-pig-UwBXS6Hn3IRz2", bitly_gif_url: "https://gph.is/2e0xNrq", …}
4: {type: "gif", id: "g07jGrqV4Lt3y3ysre", url: "https://giphy.com/gifs/thedodo-cute-the-dodo-guinea-pig-g07jGrqV4Lt3y3ysre", slug: "thedodo-cute-the-dodo-guinea-pig-g07jGrqV4Lt3y3ysre", bitly_gif_url: "https://gph.is/g/Z5B76Q4", …}
5: {type: "gif", id: "PpMeUUFlZXQQ0", url: "https://giphy.com/gifs/guinea-pig-PpMeUUFlZXQQ0", slug: "guinea-pig-PpMeUUFlZXQQ0", bitly_gif_url: "https://gph.is/2ezqtVE", …}
6: {type: "gif", id: "lhekVSXhExiYo", url: "https://giphy.com/gifs/cheezburger-cute-eating-lhekVSXhExiYo", slug: "cheezburger-cute-eating-lhekVSXhExiYo", bitly_gif_url: "https://gph.is/13IK9UX", …}
7: {type: "gif", id: "lbbtOey8rl3a0", url: "https://giphy.com/gifs/dog-guinea-pig-lbbtOey8rl3a0", slug: "dog-guinea-pig-lbbtOey8rl3a0", bitly_gif_url: "https://gph.is/1US2uJC", …}
8: {type: "gif", id: "GYlAnXsFWk4U0", url: "https://giphy.com/gifs/guinea-pig-GYlAnXsFWk4U0", slug: "guinea-pig-GYlAnXsFWk4U0", bitly_gif_url: "https://gph.is/2efPO2F", …}
9: {type: "gif", id: "BILk8Oiyby8Jq", url: "https://giphy.com/gifs/sleepy-warm-guinea-pig-BILk8Oiyby8Jq", slug: "sleepy-warm-guinea-pig-BILk8Oiyby8Jq", bitly_gif_url: "https://gph.is/230cmHR", …}
length: 10
__proto__: Array(0)
````
## Question 1:

What is data.data[3].type?   Ans: 'gif'

## Question 2:

How would you access the url at index 9?   Ans: data.data[9].url

## Question 3:

Given:
````
let data.data = dataArr;

for(let i = 0; i < dataArr.length; i++){
     let everyUrl = [];
     everyUrl.push(dataArr[i].url);
     return everyUrl
}

````
How would you return the url of every index?