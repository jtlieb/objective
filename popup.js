// your_script.js

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "openPopup") {
      // Open objective.html in a new tab or the active tab as needed
      chrome.tabs.create({ url: "objective.html" });
    }
  });

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('objective-form');
    var input = document.getElementById('objective-input');

    document.getElementById("objective-input").focus();

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var userObjective = input.value;
        
        // Create message
        var message = document.createElement("div");
        message.textContent = "Got it. Let's help you " + input.value + "!";
        document.body.appendChild(message);
    
        // Close the popup after 2 seconds
        setTimeout(function () {
          window.close();
        }, 2000);
    });
});

