![Recs@Brown](https://user-images.githubusercontent.com/47846691/147621431-76c73f78-9b39-44fe-9ddb-28e205a3d312.png)

# Overview
This app provides custom course recommendations for students at Brown University based on a student's previously-taken courses, intended concentration, and semester level. It also pulls information from Brown's anonymous course evaluation site, the Critical Review, which contains information on workload, professor teaching style, and more.

## Who needs this?
Brown's Open Curriculum offers a LOT of choice for students, in terms of what concentration(s) to pursue and which classes they can take to fulfill their concentrations. However, sometimes the amount of choice is overwhelming, and it's difficult to plan out courses in the future when you don't know which courses will fit your schedule and interests the best. 

Recommendations@Brown makes choosing classes easier—just input a few preferences (e.g. keywords, average hours, etc.) and you’ll get a customized list of course recommendations!

<img alt="recs-at-brown" src="https://user-images.githubusercontent.com/47846691/147621048-0aef3282-7a82-4fcf-aa41-60e23813dc5e.png">

# How does it work?

## Java Backend
- Uses a KD tree & nearest neighbor search algorithm that takes into account keyword search score, course rating, professor rating, and course hours
- Filters recommendations based on user preferences
- Generates a score for keyword searches
- Interacts with a database to store user information (passwords are hashed using MD5)

## React Frontend
- uses React framework and ChakraUI for component building
- interacts with the backend to support sign up and login
- supports google login and authentication
