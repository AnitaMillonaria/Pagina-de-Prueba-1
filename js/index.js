
const $footer = document.querySelector(`footer`);
const elBoton = document.createElement(`button`);
elBoton.innerText = `Hacé click acá `;
elBoton.style= 
`font-size:1rem;
padding:10px;
margin: 0 30px 30px 30px;
border-radius:20px;
font-style:italic;
color:red;
text-shadow: 0 0 20px green;
`
elBoton.classList.add(`nuevoBoton`);
$footer.appendChild(elBoton);
elBoton.addEventListener(`click`,()=>{
alert(` ¡ clickeaste el botón !`)


});



