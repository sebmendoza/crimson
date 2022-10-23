# The Project: Crimson Cube  
![Crimson Logo](https://github.com/sebmendoza/crimson-crashers/blob/main/public/Logo.svg)

# The Project: Crimson Cube  

## About
Communication can be a major challenge for certain children. Parents, teachers, and friends can struggle to connect with them, leading to strains in these adolescent relationships. **Crimson** hopes to change that. Our product promotes innovative communication strategies, helps develops interpersonal connections, and aids those with communication disabilities. But how?

There are two major components:
1. **The Crimson Cube**

A 15cm by 15cm toy/aid that records and sends data to a web application. Through interactions with the cube, a user can express their feelings, thoughts, desires and answers to questions. Someone who is normally apprehensive with expressing themselves can feel more comfortable since they are communicating implicitly instead of explicitly.

Communication Features:
- 4 coloured buttons where the user can control their current mood and set 'mood intensity' by turning the button.
- A toggle switch to answer 'yes' or 'no' to questions asked.
- A fidget tracker that measures emotions like anxiety and restlessness.
- A 4-setting dial that indicates action items like sleep, eating, sleeping and quiet time.

2. **The Interactive Application**

The Crimson website allows a user to keep up to date with their kid and his/her actions! Quick status pages with donut graphs allows for fast information on mood and action items -- such as hungry or sad. Quick info on this the page informs users about the last time your child/student used the cube, what they were feeling, and how they have been doing for the current day. 

More in depth graphs and analysis is found in the More Details section. Here, larger informatics explore trends between variables that let the user understand their child/students across weeks or even months.

Click [here](https://tinyurl.com/crimson-cube2022) for App Walkthrough!
Click [here](https://youtu.be/gwC_sbviAk4) for Project Demo!

## The Build
Crimson is an Iot project that utilizes and blends embedded systems, web development and database management. 

### Hardware
The Crimson Cube runs on the NodeMCU ESP8266 microcontroller. The different communication features are wired to the microcontroller which then packs the data and pushes it to the Firebase database in the form of JSON objects. The Cube was also tested on an Arduino UNO for prototyping purposes. The communication features are wired as follows:
- Buttons: Rotary encoders which can rotate to set mood intensity and then clicked to confirm.
- Switch: Toggle switch to represent likes and dislikes to questions in real-time.
- Fidget Tracker: A potentiometer which displays the differences in voltage measured to determine the amount of time the toy is used.
- Dial: A rotary encoder which measures the amount it has been rotated to determine the action the user wants.

### Mechanical
The Crimson Cube employs SLS 3D-printing technology for all of the mechanical aspects of the device. Designed on OnShape and printed overnight. 

### Software
The web application is built with Next.js, React and Firebase.  Nextjs was our go to solution for easy routing with a non-SPA website and was perfect for hosting on its parent company Vercel. Our team was most comfortable with and thus used React's component based structure and it's useful functional component programming. Firebase was implemented as a server to fetch cloud sensor data in JSON to be used for informational and graphical display. The website is fully responsive, built with mobile-first design using TailwindCSS, a neccessity for when a user is on the go.

## Next Steps
We have some bugs that need to be ironed out as this is a 'hacked' project, but we are excited to fix hardware and troubleshoot some software to iterate on this product!  We plan to integrate firebase authentication while reorganizing our UI for the clearest communication on our dashboards.
