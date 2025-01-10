function populateStorage() {
   localStorage.setItem("bgcolor", document.getElementById("culoare").value);
   setStyle();
}

function setStyle() {
   const currentColor = localStorage.getItem("bgcolor");
   document.getElementById("culoare").value = currentColor;
   document.body.style.backgroundColor = currentColor;
}

window.onload = function() {  
   // Eticheta cu valoarea creditului social
   const value = document.querySelector("#value");
   const input = document.querySelector("#credit");
   value.textContent = input.value;
   input.addEventListener("input", function(event) {
      value.textContent = event.target.value;
   })

   // Schimbarea culorii de fundal
   if (!localStorage.getItem("bgcolor")) {
      populateStorage();
   } else {
      setStyle();
   }
   const bgColorForm = document.getElementById("culoare");
   bgColorForm.onchange = populateStorage;
}