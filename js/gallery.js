// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();


// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
    requestAnimFrame( animate );
	var currentTime = new Date().getTime();
	if (mLastFrameTime === 0) {
		mLastFrameTime = currentTime;
	}

	if ((currentTime - mLastFrameTime) > mWaitTime) {
		swapPhoto();
		mLastFrameTime = currentTime;
	}
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {
	//Add code here to access the #slideShow element.
document.getElementById("slideShow");
	//Access the img element and replace its source
	//with a new image from your images array which is loaded
  	//from the JSON string
document.getElementById('photo').src= mImages['mCurrentIndex'];
	console.log('swap photo');
}

// Counter for the mImages array
var mCurrentIndex = 0;
setInterval(() => {
    console.log(counter++)
  }, 5000);
// XMLHttpRequest variable
var mRequest = new XMLHttpRequest();

mRequest.addEventListener("readystatechange", () => {
  // console.log(request, request.readyState);
  if (mRequest.readyState === 4 && mRequest.status === 200) {
    const data = JSON.parse(mJson);
    console.log(data);
  } else if (mRequest.readystate === 4) {
    console.log("could not fetch data");
  }
});

mRequest.open("GET", "images.JSON");
mRequest.send();

// Array holding GalleryImage objects (see below).
var mImages = []

var location = document.getElementsByClassName("location").innerHTML[0];
var description = document.getElementsByClassName("description").innerHTML[1];
var date = = document.getElementsByClassName("date").innerHTML[2];
;

// Holds the retrived JSON information
var mJson;

// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = 'insert_url_here_to_image_json';


//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).
function makeGalleryImageOnloadCallback(galleryImage) {
	return function(e) {
		galleryImage.img = e.target;
		mImages.push(galleryImage);
	}
}

$(document).ready( function() {

	// This initially hides the photos' metadata information
	$('.details').eq(0).hide();

});

window.addEventListener('load', function() {

	console.log('window loaded');

}, false);
	//implement me as an object to hold the following data about an image:
function GalleryImage() {
  this.location;
  	//1. location where photo was taken
  this.description;
  	//2. description of photo
  this.date;
  	//3. the date when the photo was taken
  this.img;
	//4. either a String (src URL) or an an HTMLImageObject (bitmap of the photo. https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
}
