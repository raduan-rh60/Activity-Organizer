# Activity-Organizer
Developer: Md. Raduanul Haque.<br>
this is a project based on Angular verison 18 with bootstrap.

# How it works
in this project we have these following pages:
1. Landing page.
2. Login page.
3. signup page.
4. dashboard pages.

the dashboard page hase the following component
1. Today activities. (only present day activities will be shown.)
2. My activities (all activities will be shown.)
3. Completed activities (only completed activities will be shown.)
4. Favorite activities (only favorite activities will be shown.)

# Functionality Overview
Today Activity page:<br>
this is the first dynamic page when user will redirect after login.
Here is these option availabe <br>
    1. add button: <br>
        this button will popup a form where we can add activities.<br>
    2. activity template:<br>
        in this area all the activities of current date will show up.
        if there is no activity available for today then it will show a message in the body and a button redirect to the my activities page<br>

my activity page: <br>
in this page there will be three dynamic box showing each of them count of (all activities, favorite activities, completed activities)
and all the activities will be shown after the boxes in a table formate.
and can haave options to edita and delete.

Completed Activity page: <br>
this page will only show the filtered completed activities similar view as the my activities page table formate

Favorite activities: <br>
this page will only show the favorite activities similar view as the my activities page table formate.

# How to run 
Firstly you have to create environment for angular in your PC then follow the following steps. <br>
step 1: open terminal on the project directory <br>
step 2: $ npm install<br>
step 3: install bootstrap.<br>
step 4: $ json-server --watch activity.json<br>
step 5: ng serve <br>
step 6: click on the link from the terminal.<br>