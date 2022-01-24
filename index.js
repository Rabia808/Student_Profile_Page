const button = document.querySelector("button");
button.addEventListener("click", () => {
  // Get the data from each element on the form.
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const fathername = document.getElementById("fathername");
  const dob = document.getElementById("dob");
  const course = document.getElementById("course");
  const admission = document.getElementById("admission");
  const phone = document.getElementById("phone");
  const img = document.querySelector("#profileImg");

  // This variable stores all the data.
  let data =
    "\r first Name: " +
    fname.value +
    "\r\n Last Name: " +
    lname.value +
    "\r\n father Name: " +
    fathername.value +
    " \r\n " +
    "Dob: " +
    dob.value +
    " \r\n " +
    // "Course: " +
    // course.value +
    " \r\n " +
    "Admission Date: " +
    admission.value +
    " \r\n " +
    "Phone No.: " +
    phone.value;

  let imgdown = "\r  image: " + img.name;
  console.log(imgdown);
  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: "text/plain" });
  const imgToBLOB = new Blob([imgdown], { type: "image/jpg" });
  const sFileName = "formData.txt"; // The file to save the data.
  const pic = "profileImage.jpg";

  let newLink = document.createElement("a");
  newLink.download = sFileName;
  let newLink1 = document.createElement("a");
  newLink1.download = pic;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  if (window.webkitURL != null) {
    newLink1.href = window.webkitURL.createObjectURL(imgToBLOB);
  } else {
    newLink1.href = window.URL.createObjectURL(imgToBLOB);
    newLink1.style.display = "none";
    document.body.appendChild(newLink1);
  }

  newLink1.click();
  newLink.click();
});
