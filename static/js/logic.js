function loadFile() {
  // Get the file input element
  var fileInput = document.getElementById("fileInput");

  // Check if a file is selected
  if (fileInput.files.length > 0) {
    var file = fileInput.files[0]; // Get the first file from the list

    var reader = new FileReader();

    // Set up an event handler for when the file has been loaded
    reader.onload = function(event) {
      // Retrieve the file contents
      var fileContents = event.target.result;

      // Perform any processing or manipulation on the file contents here

      // Save the file to the "data" folder
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "./data/" + file.name, true);
      xhr.setRequestHeader("Content-Type", "application/octet-stream");
      xhr.send(fileContents);

      // Display the file contents
      console.log("File contents:");
      console.log(fileContents);

      // Display a message or perform any additional actions
      console.log("File saved successfully!");
    };

    // Read the file as text
    reader.readAsText(file);
  }
}
