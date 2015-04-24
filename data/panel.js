// Fetch button dialog options
var addButton = document.getElementById("add");
var loadButton = document.getElementById("load");
var batchButton = document.getElementById("batch");

var addSearchPathButton = document.getElementById("addSearchPath");
var savePageTypeButton = document.getElementById("savePageType");

var cancelButton = document.getElementById("cancel");

//var savepinfoButton = document.getElementById("save-pinfo");
//var saveuserpButton = document.getElementById("save-userp");

var buttonDiv = document.getElementById("buttonDiv");
var addDiv = document.getElementById("addDiv");
var loadDiv = document.getElementById("loadDiv");
var batchDiv = document.getElementById("batchDiv");
var cancelDiv = document.getElementById("cancelDiv");
var searchPathsDiv = document.getElementById("searchPaths");


//Add click listeners
addButton.addEventListener("click", 
function(){
  setVisibility("add");
});
loadButton.addEventListener("click", 
function(){
  setVisibility("load");
});
batchButton.addEventListener("click", 
function(){
  setVisibility("batch");
});
cancelButton.addEventListener("click", 
function(){
  setVisibility("cancel");
});


var curid = -1;
addSearchPath.addEventListener("click",
function(){
  curid++;
  createSearchPathDiv(searchPathsDiv, curid);
});

function createSearchPathDiv(d, i){
  var newdiv = document.createElement("div");
  newdiv.id = "path" + i;
  
  var iname = document.createElement("input");
  iname.id = "name" + i;
  iname.value = "Name";
  
  var idelete = document.createElement("input");
  idelete.id = "delete" + i;
  idelete.type = "button";
  idelete.value = "x";
  idelete.addEventListener("click", deleteSearchPathDiv);
  
  newdiv.appendChild(iname);
  newdiv.appendChild(idelete);
  d.appendChild(newdiv);
}

function deleteSearchPathDiv(e){
  e.target.parentElement.remove();
}

/*
pinfoButton.addEventListener("click",
function(){
  // Requests personal info object from main thread
  self.port.emit("pinfo-request");
});

userpButton.addEventListener("click",
function(){
	// Request user/password object from main thread
	self.port.emit("userp-request");
});

cancelButton.addEventListener("click", 
	function(){
	  // Send a fill message back to the main thread
	  self.port.emit("cancel-request");
	  //self.hide();
});
*/
/*
saveuserpButton.addEventListener("click",
function(){
	var newSaveObj = new passwordObject(
			usernameInput.value,
			passwordInput.value,
			encodeURIComponent(actionInput.value),
			pname,
			pid);
	self.port.emit("save-userp-request", newSaveObj);	
});
*/

function setVisibility(state){
	// Reset the visibility for the popup
	addDiv.style.display = "none";
	loadDiv.style.display = "none";
	batchDiv.style.display = "none"
	buttonDiv.style.display = "none";
	cancelDiv.style.display = "block";
	if(state == "add"){addDiv.style.display = "block";}
	else if(state == "load"){loadDiv.style.display = "block";}
	else if(state == "batch"){batchDiv.style.display = "block";}
	else if(state == "cancel"){buttonDiv.style.display = "block"; cancelDiv.style.display = "none";}
};
/*
//Listen for saved info response
self.port.on("pinfo-response", function(savedInfo){
	// Display pinfo div and hide buttons
	pinfoDiv.style.display = "block";
	buttonDiv.style.display = "none";
	cancelDiv.style.display = "block";
	// Fill in the values if we have some saved
	if(savedInfo){
		var savedObj = JSON.parse(savedInfo);
		if(savedObj){
			firstInput.value = savedObj.first;
			lastInput.value = savedObj.last;
			addressInput.value = savedObj.address;
			cityInput.value = savedObj.city;
			stateInput.value = savedObj.state;
			countryInput.value = savedObj.country;
			phoneInput.value = savedObj.phone;
			emailInput.value = savedObj.email;
		}
	}
});
*/
self.port.on("show", function onShow() {
//textArea.focus();
});