window.onload = function(){
    const div1 = document.createElement("div");
    div1.setAttribute("class", "center");
    document.body.appendChild(div1);
    
    const cim = document.createElement("h1");
    cim.textContent = `Olcsaclicker`;
    cim.setAttribute("class", "center");
    div1.appendChild(cim);

    const letoltes = document.createElement("button");
    letoltes.textContent = `Letöltés`;
    letoltes.setAttribute("onclick", "letoltes()");
    div1.appendChild(letoltes);
}

function letoltes(){
    const ertesites = document.createElement("p");
    ertesites.textContent = `A letöltés elkezdődött!`;
    ertesites.setAttribute("class", "ertesitesStyle")
    document.body.appendChild(ertesites);

    const url = 'J:/bullshit/olcsaclicker/olcsaclicker.exe';
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}