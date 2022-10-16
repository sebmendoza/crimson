# The Project: Crimson Cube  
[![Crimson Logo](https://github.com/sebmendoza/crimson-crashers/blob/main/public/Logo.svg)]()

## About
Communication can be a major challenge for certain children. Parents, teachers, and friends can struggle to connect with them, leading to strains in these adolescent relationships. **Crimson** hopes to change that. Our product promotes innovative communication strategies, helps develops interpersonal connections, and aids those with communication disabilties. But how?

There are two major components:
1. **The Crimson Cube**

A 15cm by 15cm toy/aid that records and sends data to a web application. Through interactions with the cube, a user can express their feelings, thoughts, desires and answers to questions. Someone who is normally apprehensive with expressing themselves can feel more comfortable since they are communicating implicitly instead of explicitly.

Communication Features:
- 4 coloured buttons where the user can control their current mood and set 'mood intensity' by turning the button.
- A toggle switch to answer 'yes' or 'no' to questions asked.
- A fidget tracker that measures emotions like anxiety and restlessness.
- A 4-setting dial that indicates action items like sleep, eating, sleeping and quiet time.

2. **The Interactive Application**

Open demo link: (click here!)[]



## The Build
Crimson is an Iot project that utilizes and blends embedded systems, web development and database management. 

### Hardware
The Crimson Cube runs on the NodeMCU ESP8266 microcontroller. The different communication features are wired to the microcontroller which then packs the data and pushes it to the Firebase database in the form of JSON objects. The Cube was also prototyped on an Arduino UNO for prototyping purposes. The communication features are wired as follows:
- Buttons: Rotary encoders which can rotate to set mood intensity and then clicked to confirm.
- Switch: Toggle switch to represent likes and dislikes to questions in real-time.
- Fidget Tracker: A potentiometer which displays the differences in voltage measured to determine the amount of time the toy is used.
- Dial: A rotary encoder which measures the amount it has been rotated to determine the action the user wants.

### Software

