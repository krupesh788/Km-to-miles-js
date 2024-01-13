function convert(){

    let km = document.getElementById("km").value;


    let miles = km * 0.62137;


    document.getElementById("p1").innerHTML = `${km} kilometers is approximately ${miles} miles`;
}
