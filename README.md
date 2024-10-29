# Activity-Organizer
Developer:Md. Raduanul Haque.

this is a project based on Angular and json queries.

# Description
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

Today Activity page:
this is the first dynamic page when user will redirect after login.
Here is these option availabe 
    1. add button: 
        this button will popup a form where we can add activities.
    2. activity template:
        in this area all the activities of current date will show up.
        if there is no activity available for today then it will show a message in the body and a button redirect to the my activities page

my activity page: 
in this page there will be three dynamic box showing each of them count of (all activities, favorite activities, completed activities)
and all the activities will be shown after the boxes in a table formate.
and can haave options to edita and delete.

Completed Activity page: 
this page will only show the filtered completed activities similar view as the my activities page table formate

Favorite activities: 
this page will only show the favorite activities similar view as the my activities page table formate.

# How to run 
Firstly you have to create environment for angular in your PC then follow the following steps.
step 1: open terminal on the project directory
step 2: $ npm install
step 3: install bootstrap.
step 4: $ json-server --watch activity.json
step 5: ng serve 
step 6: click on the link from the terminal.