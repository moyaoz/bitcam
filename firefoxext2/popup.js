console.log("about to add event listener");

document.getElementById('open').addEventListener('click', () => {
    console.log("about to create window");
    browser.tabs.create({
      url: browser.runtime.getURL("camera.html"),
      type: "popup",
      width: 400,
      height: 500
    });
  });
  