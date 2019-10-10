const main = document.querySelector("main");

main.innerHTML += `
    <h1 class="stor knapp">Dette er en overskrift</h1>
`;

// Lager et HTML-element
const overskrift = document.createElement("h2");
overskrift.innerText = "Hallo der ute!!!";
overskrift.className = "tekst";
overskrift.classList.add("liten");
overskrift.id = "t1032434";
overskrift.style.color = "purple";

main.appendChild(overskrift);

overskrift.onclick = () =>  main.removeChild(overskrift) 