
var bio = {
    "name": "Kadi Diallo",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "646-595-8378",
        "email": "Kadiatu4@gmail.com",
        "github": "Kadiatu4",
        "linkedIn": "",
        "location": "New York, NY"
    },
    "welcomeMessage": "Hello I'm Kadi and I am a Front-End Web Developer",
    "skills": [
              "Languages:JavaScript, Python, HTML5, CSS3.",
              "Frameworks/library: jQuery, Bootstrap, Grunt.",
              "Other:Git/GitHub, Brackets, GIMP."
    ],
    "bioPic": "images/me.jpg"
};

bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);


var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var allContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;

$("#topContacts").append(allContacts);
$("#footerContacts").append(allContacts);
$("#header").append(HTMLskillsStart);

  for (i in bio.skills){
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
  $("#skills").append(formattedSkill);
  }
};
bio.display();

//Education function
var education = {

    "schools": [
        {
            "name": "Hyde Leadership Charter School",
            "location": "730 Bryant Ave, Bronx, NY",
            "degree": "Advanced Regents Diploma",
            "majors": "N/A",
            "dates": "2012-2015"
        },
        {
            "name": "CUNY York College",
            "location": "94-20 Guy R Brewer Blvd, Jamaica, NY 11451",
            "degree": "BA",
            "majors": "Computer Science",
            "dates": "2015-2019"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "May 2015 - Dec 2015",
            "url": "http://udacity.com"
        }
    ],
    "Programs": [
        {
            "title": "Girls Who Code Alum",
            "school": "Girls Who Code",
            "dates": "July 2014 - Aug 2014",
            "description": "Seven weeks of intensive instruction in computer science,<br> robotics, algorithms, web design, and mobile development."
        },
        {
            "title": "Girls Who Code Twitter",
            "school": "Twitter",
            "dates": " Jan 2015 - May 2015",
            "description": "5 months of intensive Computer Science training on Web design,<br>algorithms, JavaScript and jQuery. "
        }
    ]
};

 education.display = function() {
   //loop for Schools
    for (i in education.schools){
	$("#education").append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
  $(".education-entry:last").append(formattedSchoolName);
  var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedSchoolDate);
  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      $(".education-entry:last").append(formattedSchoolMajor);
  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    $(".education-entry:last").append(formattedSchoolDegree);


}
// loop for Online Courses

    $(".education-entry:last").append(HTMLonlineClasses);

for (i in education.onlineCourses){
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    $(".education-entry:last").append(formattedOnlineTitle);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    $(".education-entry:last").append(formattedOnlineSchool);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      $(".education-entry:last").append(formattedOnlineDates);
      var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
      $(".education-entry:last").append(formattedOnlineUrl);
}
 // loop for Programs

 $(".education-entry:last").append(HTMLprogramStart);

 for (i in education.Programs){
     var formattedprogramTitle = HTMLprogramTitle.replace("%data%", education.Programs[i].title);
     $(".education-entry:last").append(formattedprogramTitle);
     var formattedprogramSchool = HTMLprogramSchool.replace("%data%", education.Programs[i].school);
     $(".education-entry:last").append(formattedprogramSchool);
       var formattedprogramDates = HTMLprogramDates.replace("%data%", education.Programs[i].dates);
       $(".education-entry:last").append(formattedprogramDates);
       var formattedprogramDescription = HTMLprogramDescription.replace("%data%", education.Programs[i].description);
       $(".education-entry:last").append(formattedprogramDescription);
 }
};
 education.display();

var work = {
    "jobs": [
        {
            "title": "Awky Talky",
            "location" : "New York, NY",
            "position": "Co-Founder and Cheif of Design and User Interface",
            "dates": "July 2015 - Present",
            "description": "Our app, Awky Talky, instantly generates conversation starters, ranging<br> from casual to professional, based on the category selected by the user<br> allowing them to get over awkward moments in conversation."
        }

    ]

};
work.display = function() {

for (i in work.jobs)	{
	$("#workExperience").append(HTMLworkStart);

	var formattedworkTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
	$(".work-entry:last").append(formattedworkTitle);
  var formattedworkPosition = HTMLworkPostion.replace("%data%",work.jobs[i].position);
  $(".work-entry:last").append(formattedworkPosition);
  var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
  $(".work-entry:last").append(formattedworkLocation);
	var formattedworkDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
	$(".work-entry:last").append(formattedworkDates);
	var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
	$(".work-entry:last").append(formattedworkDescription);

	}
};

work.display();

var projects = {
"projects":[
  {
    "title": "Udacity Resume",
    "dates": "August 2015",
    "description": "This web page is my resume page, and it was the second project for Udacity's Front-End Nanodegree. The project was built on Google App Engine, and the project was focused on using JSON like objects to manage content more efficiently. ",
    "images": ["images/udacityresume.jpg"]
  },
  {
    "title": "Udacity Portfolio",
    "dates": "August 2015",
    "description": "This web page is my portfolio page, and it was the first project for Udacity's Front-End Nanodegree. The project was built on Google App Engine with Bootstrap, and the project was focused on using Bootstrap’s grid styling system to style the responsive and organized wep page more easily.",
    "images": [
      "images/portfolio1.jpg",
      "images/portfolio2.jpg",
      "images/feauturedWork.jpg"
      ]
  },
  {
  "title": "My Resume",
  "dates": "September 2014",
  "description": "This is the first project I created on my own after learning participating in Girls Who Code. I used a template  and modified the CSS file to create this finished look.",
  "images": [
    "images/firstresumetop.jpg",
    "images/firstresumeskills.jpg"
      ]
    }
  ]
};

projects.display = function(){
 $("#projects").append(HTMLprojectStart);

 for(i in projects.projects){
   var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
   $(".project-entry").append(formattedprojectTitle);
   var formattedprojectDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry").append(formattedprojectDate);
   var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
   $(".project-entry").append(formattedprojectDescription);
   if (projects.projects[i].images.length > 0){
     for (image in projects.projects[i].images){
       var formattedprojectImg = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
     $(".project-entry").append(formattedprojectImg);
     }
   }

 }
};
projects.display();
//Map

$("#map-div").append(googleMap);


/// this is for the navbar
$(function() {
  var navPosition = $('#nav-bar').offset().top -10;
  var navBar = document.getElementById('nav-bar');
  var header = document.getElementById('header');

  function navControl() {
    var currentScroll = $(document).scrollTop();
    if (currentScroll >= navPosition) {
      navBar.classList.add('fixed-nav');
      header.classList.add('expand-header');
    } else {
      navBar.classList.remove('fixed-nav');
      header.classList.remove('expand-header');
    }
  }

  $(window).scroll(navControl);
});
