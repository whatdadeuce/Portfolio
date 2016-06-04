/**
 * FileName: app.js
 * 
 * @author Kenneth Bato
 * @date June 3, 2016
 * 
 * StudentID: 300448795
 * website: kenportfolio.azurewebsites.net
 * @description This file is the main javascript file for the web site
 */

//IIFE
(function() {
    "use strict";
    //create reference for aboutMe
    var aboutMe = document.getElementById("aboutMe");

    //data for aboutMe. Check to see if aboutMe exists on the page
    if (aboutMe){
    aboutMe.innerHTML = "<h2 class='display-1'>About Me</h2>" +
        "<p class='lead'>Architectural Technology Graduate with" +
        "five years of experience working for an Architectural Firm and " +
        "currently in school studying Software Engineering Technology.</p>" +
        "<hr class='m-y-md'>" +
        "<p>Passionate, self motivated, ambitious and enjoys learning especially those of personal interest.</p>";
   }

    //create array reference for projectDesc
    var projectDesc = [];
    	projectDesc[0]= document.getElementById("projectDescBakery");
    	projectDesc[1]= document.getElementById("projectDescDairy");
    	projectDesc[2]= document.getElementById("projectDescProduce");

	//date from projectDesc
    var DescArray = [];
    	DescArray[0] = "<div class='panel'><h1>Grocery Interior - Bakery Department</h1>"+
                                    "<p>Interior rendering of proposed Bakery department design</p></div>";
    	DescArray[1] = "<div class='panel'><h1>Grocery Interior - Dairy Department</h1>"+
                                    "<p>Interior rendering of proposed Dairy department design</p></div>";
    	DescArray[2] = "<div class='panel'><h1>Grocery Interior - Produce Department</h1>"+
                                    "<p>Interior rendering of proposed Produce department design</p></div>";

    //iterate and check if projectDesc reference id exists on the page and apply appropriate data
    for (var i = projectDesc.length; i >=0; i--){
    	if (projectDesc[i]){
    		projectDesc[i].innerHTML = DescArray[i];
    	}
    }
})();
