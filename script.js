// single file
function SelectFile() {
  var input = document.getElementById("file-uploader");
  if (input.files.length) {
    var output = document.getElementById("selected-file-name");
    output.innerHTML = input.files.item(0).name;
  }
}

function ResetSelectFile() {
  document.getElementById("selected-file-name").innerHTML = "No File Selected";
  document.getElementById('file-upload').value= null;
}



// multiple files
function SelectFiles() {
  var input = document.getElementById("multiple-file-uploader");
  if (input.files.length) {
    fileNames = "";
    var output = document.getElementById("selected-file-names");
    for (var i = 0; i < input.files.length; ++i) {
      fileNames += input.files.item(i).name + " - ";
    }
    fileNames = fileNames.slice(0, -2);
    output.innerHTML = fileNames;
  }
  
}

function ResetSelectFiles() { 
  document.getElementById("selected-file-names").innerHTML = "No File Selected";
  document.getElementById('multiple-file-upload').value= null;
}

