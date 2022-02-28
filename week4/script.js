const print5 = () => {
  for (let i = 1; i < 6; i++) {
    console.log(i);
  }
};

print5();
print5();

const changeHeading = () => {
  document.getElementById("heading").firstChild.nodeValue = "New Heading";
};

const changeContent = () => {
  document.getElementById("content").firstChild.nodeValue = "New Paragraph !!";
};

const loadFunction = () => {
  document.getElementById("heading").addEventListener("click", changeHeading);
  document.getElementById("content").addEventListener("click", changeContent);
};

document.addEventListener("DOMContentLoaded", loadFunction);
