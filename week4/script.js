const print5 = () => {
  for (let i = 1; i < 6; i++) {
    console.log(i);
  }
};

print5();
print5();

const changeHeadingNew = () => {
  document.getElementById("heading").firstChild.nodeValue = "New Heading";
};

const changeHeadingBack = () => {
  document.getElementById("heading").firstChild.nodeValue = "Heading";
};

const changeContentNew = () => {
  document.getElementById("content").firstChild.nodeValue = "New Paragraph !!";
};

const changeContentBack = () => {
  document.getElementById("content").firstChild.nodeValue = "Paragraph";
};

const submitForm = () => {
  document.getElementById("new-content").innerHTML =
    document.getElementById("box").value;

  document.getElementById("submit-button").remove();

  document.getElementById("box").addEventListener("keyup", changeByType);
};

const changeByType = () => {
  document.getElementById("new-content").innerHTML =
    document.getElementById("box").value;
};

const loadFunction = () => {
  document
    .getElementById("heading")
    .addEventListener("mouseenter", changeHeadingNew);
  document
    .getElementById("heading")
    .addEventListener("mouseleave", changeHeadingBack);
  document
    .getElementById("content")
    .addEventListener("mouseenter", changeContentNew);
  document
    .getElementById("content")
    .addEventListener("mouseleave", changeContentBack);
  document
    .getElementById("submit-button")
    .addEventListener("click", submitForm);
};

document.addEventListener("DOMContentLoaded", loadFunction);
