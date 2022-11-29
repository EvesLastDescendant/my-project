//home events section to events page
function eventPost() {
    window.open("event.html", "_blank");
}

//blog central 
//blog carousel to individual blog page

function openFirstBlog() {
    window.open("blogpost.html", "_blank");
}
//read more on blogs
//vrblog
function openVr() {
    const x = document.getElementById('vrblog');
    const b = document.getElementById('vrbtn');
    if ( x.style.display === "none") {
        x.style.display = "block";
        b.innerHTML = "Read Less";
    } else {
        x.style.display = "none";
        b.innerHTML = "...Read More";
    }
}

//vr2blog
function openVr2() {
    const x = document.getElementById('vr2blog');
    const b = document.getElementById('vr2btn');
    if ( x.style.display === "none") {
        x.style.display = "block";
        b.innerHTML = "Read Less";
    } else {
        x.style.display = "none";
        b.innerHTML = "...Read More";
    }
}

//techblog
function openTech() {
    const x = document.getElementById('techblog');
    const b = document.getElementById('techbtn');
    if ( x.style.display === "none") {
        x.style.display = "block";
        b.innerHTML = "Read Less";
    } else {
        x.style.display = "none";
        b.innerHTML = "...Read More";
    }
}

//tech2blog
function openTech2() {
    const x = document.getElementById('tech2blog');
    const b = document.getElementById('tech2btn');
    if ( x.style.display === "none") {
        x.style.display = "block";
        b.innerHTML = "Read Less";
    } else {
        x.style.display = "none";
        b.innerHTML = "...Read More";
    }
}