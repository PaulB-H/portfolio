<!-- 

Notes and Commits documentation moved from original home on style.css

Documentation for trying to fix footer display on mobile

Issue #1: On mobile the footer is pushed off the page the aprox height of the navbar OR the browser / phone control bar at bottom of screen.

Issue 1
    Oct 1 / Paul / Added float-right to line 92 of index.html

Commit 2
    "Issue 1 - Oct 1 / Paul / Removed float-right line 92 of index.html Removed d-flex class from line 28 of index.html since the parent container is already set to d-flex"

Commit 3
    "Issue 1 - Paul - Found https://developers.google.com/web/updates/2016/12/url-bar-resizing and https://dev.to/peiche/100vh-behavior-on-chrome-2hm8 added @supports on body line 34-40 of style.css"

Commit 4
    "Reverting previous commit"

Commit 5
    "Issue 1 - Paul - Adding min-height: -webkit-fill-available; to line 33 of style.css based on https://stackoverflow.com/a/55003985/11665872"

Commit 6
    "Issue 1 - Paul - Removing change from last commit, adding a fix with JS from https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ and commented out the min-height 100vh"

Commit 7
    "Commenting out last commit and moving over to new repo as I will submit assignment like this"

Commit 8
    "Issue 1 Resolved - Implementing JS fix proved to work from https://github.com/PaulB-H/Portfolio---Fixing-100vh-on-mobile, ensured each html page has correct link to new JS file, previously attempted this fix but I did not give GitHub enough time to update the page before checking it on my phone - Need better way to live-test pages on phone"

Commit 9
    "Removing mt-4 from Portfolio header, added style padding top 10px inline to keep spacing consistant with other pages, will work towards proper global styling between pages"

Commit 10
    "added stylepaddingtop 0px to contact page to match portfolio"

Commit 11
    "Adding favicon and link in headers of all pages, set goal for next fix above .portPic in style.css"

NOTE:
    Consider adding more support for favicons
    See:
    https://stackoverflow.com/a/30839701/11665872
    and 
    https://scotch.io/tutorials/all-favicons-for-all-devices-and-sizes
    for info

commit 12
    "moved notes and commit comments from styles.css to notesNcommits.md, deleted unused images"

commit 13
    "removed more unused images"

commit 14
    "Documented footer position bug due to vh calculation script, created current / past issues section in notesNcommits"

commit 15
    "Issue 2 - discovered root cause - script to determine max vh and thereby the footer location only runs when page is generated, perhaps can find a way to call also when page is resized, also made my current/past bugs section nice"

commit 16
    "moved bio image under bio header, forced off padding from card body style, noticed portfolio header centers with page when page is wide enough, but left when its not, want to apply this to other pages, will try text-center and text-lg-left"

commit 17
    "text-center text-lg-left for the h1 elements gave me desired effect, applying to all pages"

commit 18
    "Resolved - Issue 2 - this runs the setproperty thing every time the window is resized .resize(.setProperty('--vh', `${vh}px`);, also applied smaller margin to bottom of portfolio horizontal"

commit 19
    "ignore previous commit message... issue 2 fix breaks mobile footer position, commenting fix out for now, updated bug tracker"


----------------------------------------------------
Current Bugs
----------------------------------------------------
Issue 2
    due to JS vh calculation script, when adjusting page size footer can position incorrectly

    discovered root cause - script to determine max vh and thereby the footer location only runs when page is generated, perhaps can find a way to call also when page is resized

    Code to fix that
    https://www.w3schools.com/jquery/event_resize.asp
    .resize(function(){
    $('span').text(x += 1);
    });

    Issue 2 resolved NOPE SEE BELOW: 
    // this runs the setproperty thing every time the window is resized
    .resize(.setProperty('--vh', `${vh}px`);

    // this broke mobile (chrome) footer display again nooooo commenting out for now
    // .resize(.setProperty('--vh', `${vh}px`);
----------------------------------------------------
Past Bugs
----------------------------------------------------
Issue 1
    Due to webkit browsers considering vh100 to pretend URL bar does not exist, had to use script to generate vh since sticky footer and page layout is dependant on fluid containers set with min-height=100vh
----------------------------------------------------

maybe 