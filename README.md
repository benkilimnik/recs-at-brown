# cs0320 Term Project 2021

**Team Members:** 
- abredvik
- acong3
- ajeyaraj
- bkilimni
- mlee141
- pljung

**Team Strengths and Weaknesses:** 

### Strengths
- abredvik
  - Algorithms
  - Java
  - Data Structures
- acong3
  - Java
  - Generics
  - Algos
  - Documentation
- ajeyaraj
  - Code structure
  - Object Oriented Design
  - Backend/SQL
  - Java
  - Generics
- bkilimni
  - Database and SQL-related things
  - React
  - Frontend Design (no canvas though pls)
- mlee141
  - Java
  - Algos
  - Documentation
  - Communication
- pljung
  - Leadership & Planning
  - React (probably)
  - Design & OOP
### Weaknesses 
- abredvik
  - Database/SQL
  - React/Frontend
  - Javascript in general
- acong3
  - Frontend (JS, HTML, etc.)
  - Database/SQL
- ajeyaraj
  - Frontend (javascript and react)
  - Documentation
- bkilimni
  - Algorithms
  - Generics
  - Asynchronous code
- mlee141
  - Anything frontend (React & JavaScript)
- pljung
  - Algorithms
  - Databases 
  - Backend


**Project Idea(s):** 
### Idea 1
[Kalshi](https://kalshi.com/) is a platform that allows you to trade on future events by buying stakes in yes or no questions (e.g. will rent prices go up in San Francisco next month?). We want to build a trading system that consists of (A) a market recommender that given your risk tolerance, finds the most suitable Kalshi market for you and a (B) a 'fake trader' with a limited budget that allows users to test out investment strategies without real money while keeping track of gains and losses. 

- Social Impact: 
Our market recommender is educational because it helps Kalshi users manage risk by choosing the appropriate market to invest in. Moreover, our fake trading system helps new Kalshi users manage their budget and test out investment strategies without incurring actual losses. (note: while 'fake traders' for other markets exist, Kalshi has none largely because it is a new platform that offers a novel type of security called "Event Contract")

(1) What problems are we attempting to solve?
  - How do you select a market on Kalshi that matches your risk tolerance? 
  - How do you test new trading strategies on Kalshi without using real money and while staying on budget?

(2) How does our program solve these problems?
  - It pulls data from Kalshi's API about available markets and prices, calculating risk from how much prices change over time (i.e. price volatility and expected returns)
  - It matches your personal risk tolerance to the most suitable Kalshi market 
  - It allows you to set a budget and execute fake trades on a market of your choice while keeping track of gains and losses over time

(3) User input
  - Can I see what markets are most suitable for my risk tolerance and select my preferred one? 
  - Can I set a trading budget that should not exceeded?
  - Can I execute fake trades on markets of my choice, while keeping track of my gains and losses?

(4) Critical features & biggest challenges
  - A user interface to search Kalshi markets (queried via Kalshi's API) and view recommended Kalshi markets
  - A fake trading system that keeps track of a users' budget and trades
  - Login and authentication for users to access their data (gains and losses over time)

### Idea 2
Given that one of our members is in Poker Club (but not very good at poker), we were thinking about creating an app/program that helps train our poker skills.

Core Funcionality:
  - Create a base poker game with a full deck of cards and a way to shuffle them
  - Keep track of certain game characteristics such as the the cards on the table, the cards in your hand, all the possible hands you could make, etc.
  - Calculate probability of winning, pot odds, and other calculations and prompt the user to enter them after each phase of the game (and provide helpful tips maybe?)

1. What problems are we attempting to solve?
  - Finding an entertaining way to pass the time and learn a time tested game
2. How does our program solve these problems?
  - We're making a poker app!
3. User input
  - Can I play with my friends?
  - How do I know that I'm actually being taught the right moves?
  - How will the program explain the right moves?
  - What if I'm not very good with probability? Is there a beginner mode that can teach me that?
4. Critical features & biggest challenges
  - You can play a normal poker game start to finish
  - Using GTO poker to get you to choose the right move
  - Integrate a GTO algorithm
  - GUI that’s nice to deal with
  - Multi-player?

### Idea 3

Brown's Open Curriculum offers a LOT of choice for students, in terms of what concentration(s) to pursue and which classes they can take to fulfill their concentrations. However, sometimes the amount of choice is overwhelming, and it's difficult to plan out courses in the future when we're not sure which courses would fit well in our schedules and our interests.

We would like to design a program that pulls information from CAB for the upcoming semester and recommends courses to take based on a student's previously-taken courses and intended concentration. If possible, it could also pull information from the Critical Review to factor in the number of hours per week the courses are expected to take.


1. What problems are we attempting to solve?
  - Getting course recommendations, which can be really hard!
2. How does our program solve these problems?
  - It’s a recommendation system 
3. User input
  - Can I put a cap on hours?
  - Can I make sure that I get WRIT requirements?
  - What if I want a totally different type of classes than what I’ve taken in the past?
  - Can I make sure that the recommended courses are ones I haven’t taken before?
4. Critical features & biggest challenges
  - Pulls info from CAB / critical review to generate recs
  - Integrate concentration requirements?
  - WRIT requirements?


**Mentor TA:** _Put your mentor TA's name and email here once you're assigned one!_

## Meetings
_On your first meeting with your mentor TA, you should plan dates for at least the following meetings:_

**Specs, Mockup, and Design Meeting:**

**ICM Checkpoint:**

**Management Checkpoint:**

## How to Build and Run
_A necessary part of any README!_
