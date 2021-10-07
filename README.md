# **Stepping Stone** 

## **IMPORTANT NOTE:**
### For some odd reason, I couldn't upload the react client file to my github repository, I spent a while trying to debug this and couldn't find any solution. Pieter mentioned that he had the same problem. For this reason, here is a link to the google drive with the full project (the React client included): https://drive.google.com/file/d/13Jz0sV4zAkgN_ei3YOAsyYnfBepU5kPR/view?usp=sharing

#^^THE ABOVE LINK HAS BEEN UPDATED BECAUSE I STILL HAVE THE SAME PROBLEM

<a href="https://ibb.co/8Mq3FMK"><img src="https://i.ibb.co/LSmw4Sk/stepping-stone-logo.png" alt="stepping-stone-logo" border="0" width="400px"></a>
## **Table of Contents**

1. [About the project](#about)
    * [Project Description](#description)
    * [Built With](#built-with)
2. [Getting started](#getting-started)
    * [Prerequisites and installation](#prerequisites)
3. [Features and functions](#features-and-functions)
4. [Concept process](#concept-process)
    * [Brand and colour scheme](#brand)
    * [Wireframes](#wireframes)
5. [Development process](#development-process)
    * [Implementation](#implementation)
6. [Video demonstration](#vid-demonstration)
7. [Authors](#authors)
8. [Contact](#contact)
9. [Acknowledgements](#acknowledgements)

<br>

<a name="about"></a>
##  **About the project**

<a name="description"></a>

### **Project description:**
For this term in Express 203, we were tasked with creating a school scheduling system that dynamically displays the classes of the user, depending on whether they are a student or a teacher, and allows them to view the details of the individual classes accordingly, which includes them joining the google meet link. Additionally, teachers are able to edit the details of a particular class. The front end of the application was to built using ReactJS, and the backend, ExpressJS, whilst utilising middleware to log requests to the server. 

We were provided with a data file of classes, teachers, and students to work with.

<a name="built-with"></a>

### **Built with:**
Stepping stone utilised ReactJS for the Front End as a client, and ExpressJS with the additional use of middleware for all the backend functionality.
<br>
<br>

<a name="getting-started"></a>
##  **Getting started**

<a name="prerequisites"></a>

### **Prerequisites and installation:**
#### Ensure that node js is installed

* Homebrew
>brew install node
>brew install npm

* NPM

>npm install -g npm
>npm init --yes

<br>

<a name="features-and-functions"></a>
##  **Features and functions**

The application utilised a ReactJS project as a client for the front end while the back end was run with ExpressJS, utilsing middleware to handle the requests. 

The primary features of the app are as follows (in its complete form):
* Login authentication for students and teachers (seperate login for each)
* List of all classes on landing page (list of all classes taught by a particular teacher/ list of all classes taken by a particular student; depending on who logs in the allocated info will be shown)
* Details of particular class when selected (teacher, students, time, class number, subject, link)
* User ID is identified when correct username and password is supplied
* Teachers are able to edit the details of select classes

<br>

<a name="concept-process"></a>
##  **Concept Process**

<a name="brand"></a>

### **Brand and colour scheme:**

In the ideation stage of development, I developed the brand identity, the logo, and the colour scheme of the Stepping Stone.

<br>

<img src="https://i.ibb.co/QYMdP4Z/color-scheme.png" height="400px">


<br>

<a name="wireframes"></a>

### **Wireframes:**

I designed the following wireframes for my Stepping Stone application:


<img src="https://i.ibb.co/drG8RGH/Login.png" alt="Sign-In"></a>

**Sign in page**

<br>

<img src="https://i.ibb.co/c8573M9/Classes-page.png" alt="Chat-page"></a>

**First classes page design**

<img src="https://i.ibb.co/6H9sSM3/Classes-page-new-design.png">

**Final classes page design**

<img src="https://i.ibb.co/nPtbNQ6/Class-info-design-two.png">
<br>

**Class details**

<img src="https://i.ibb.co/GnhD9Mt/Edit-class-info.png">

**Edit class details**

<a name="development-process"></a>
##  **Development process**

<a name="implementation"></a>

### **Implementation:**

1. Front end design with React:
    * After conceptualising my application with my wireframes, I spent a good amount of time building the client side (front end) of the application using ReactJS so that I could have a good idea of how to go about setting up and writing my back end data

    <br>
2. Backend with Express and middleware:
    * After designing the front end client, I wrote all the necessary back end code for the server. I set up the server with express and utilised middleware to handle requests in between. I Then set up all the necessary functionality required for the front end and completely finished everything I needed for the backend.

    <br>

3. CRUD functionality: 
    * Finally, after all the other back end code was in place, I setup and finalised my CRUD functionality (most of which was not necessary for the project, but can be tested in Postman regardless).
    * CRUD entails:
        1. Create (POST)
        2. Read (GET)
        3. Update (PUT)
        4. Delete (DELETE)
<br>

<a name="vid-demonstration"></a>
##  **Video Demonstration**

[Click here](https://youtu.be/_3LFjxQUPow) to view video demonstration

<br>

<a name="authors"></a>
##  **Authors**

Developed by Kyle Pharoah (@xviovx)

<br>

<a name="contact"></a>
##  **Contact**

**Work email**: 200277@virtualwindow.co.za
<br>
<br>
**Personal email**: kyle03pharoah@gmail.com
<br>
<br>
**Twitter:** @xviovx
<br>
<br>
**Github:** xviovx 
<br>
<br>
https://github.com/xviovx/Stepping_Stone

<br>

<a name="acknowledgements"></a>
##  **Acknowledgements**

* [**Open Window**](https://www.openwindow.co.za/)

<br>
