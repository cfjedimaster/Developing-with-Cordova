document.addEventListener('deviceready', deviceready, false);

function deviceready() {

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: Camera.DestinationType.FILE_URI
     }); 

    /*    
    try {
    	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    	    destinationType: Camera.DestinationType.FILE_URI
    	 }); 
    } catch(e) {
        alert(e);
    }	
    */
    
}


function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    //image.src = "data:image/jpeg;base64," + imageData;
    image.src=imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}


