Challenge:
- Develop a simple SPA that utilizes the Reddit API (https://www.reddit.com/dev/api/)to retrieve the top  20 topics for /r/ProgrammerHumor and sorts them by number of comments in descending order. 
The list should include each topic’s title as a permalink, the author’s name, the number of up votes, and  the number of comments. 
Additionally, for each topic, if the topic’s score is even, highlight its background orange. If the topic’s  score is odd, highlight its background blue. 
Provide your submission as a link to a GitHub Repository on your account. Add a README to it with a  quick writeup of how long the challenge took for you, whether you got stuck anywhere, and some of the  notable design decisions you made.

Bonus Points:
- Attention to the presentation, including CSS-grid and media queries 
https://css-tricks.com/snippets/css/complete-guide-grid/ 
https://css-tricks.com/snippets/css/media-queries-for-standard-devices/ 
- Use React’s hooks and handle updating state after getting the response from the API 
https://reactjs.org/docs/hooks-intro.html 
- Use styled-components instead of traditional CSS stylesheets https://styled-components.com/ 
- Tests!

Notes:
- This challenge took me about 2.5 hours to complete. I would have liked to spend more time on styling towards the end, but ran out of time due to working around other responsibilities.
- I did not get stuck anywhere in particular, but one area that took extra time was becoming familiar with the Reddit API. The documentation did not explain some of the Reddit 'lingo' so I had to research to make sure I was using the correct terms. I also ensured that my data was accurate by checking between the site and my data to be sure I was getting the intended top posts.
- As for design- I went relatively basic due to time constraints, and I invested more of my time ensuring that I covered all of the skills I wanted to showcase (React hooks, styled components, flex box, media queries, etc). However I did design this mobile first- the base styles relevant to responsive layout are for smaller devices, with a media query once the size is over a basic threshold (I only did one media query due to the simple nature of the layout). For styling, I started with a base CSS stylesheet (essentially a really simple CSS reset) and used Styled Components to manage most of the appearance and layout styling. I like Styled Components because it makes adding logic to styles easy, it keeps relevant styles with their components for easy reference, and it allows you to make semantic tag names easily to keep code readable and organized.