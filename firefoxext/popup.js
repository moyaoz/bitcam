const start = document.getElementById("webcam");
start.addEventListener('click', function() {
  if (start.innerHTML === 'Start video') {
      start.innerHTML = "Stop video";
      startWebcam();
  }
  else {
      start.innerHTML = "Start video"
      stopWebcam();
  }
})
let videoElement;


async function startWebcam() {
   try {
      console.log("inside startwebcam try");
      const stream = await navigator.mediaDevices.getUserMedia({video: true})
      console.log("created stream object");
      videoElement = document.createElement('video');
      videoElement.srcObject = stream;
      videoElement.autoplay = true;
      videoElement.style.position = 'fixed';
      videoElement.style.bottom = '10px';
      videoElement.style.right = '10px';
      videoElement.style.width = '200px';
      videoElement.style.height = '150px';
      videoElement.style.zIndex = 10000;
      videoElement.style.border = '2px solid #ccc';
      videoElement.style.borderRadius = '8px';
      videoElement.style.backgroundColor = '#000';
      console.log("2");
      document.body.appendChild(videoElement);
  }
  catch (error) {
      console.error("error accessing webcam: ", error);
  }
}

function stopWebcam() {
  if (videoElement && videoElement.srcObject) {
      const tracks = videoElement.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoElement.srcObject = null;
      videoElement.remove();
      videoElement=null;
  }
}











