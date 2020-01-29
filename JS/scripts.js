document.getElementById('hello').addEventListener("click", Greeting);

function Greeting() {
  console.log("Hello!");
  document.getElementById('hello').innerHTML = "Logged.";

}
