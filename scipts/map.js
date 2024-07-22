function showRegInfo(event, region) {
    let regName = region.getAttribute("name");
    let x = event.clientX + 15;
    let y = event.clientY + 15;
    let box = document.getElementsByClassName("curRegion")[0];
    box.style.left = x + "px";
    box.style.top = y + "px";
    box.style.display = "block";
    box.innerHTML = regName;
}

function removeRegInfo() {
    let box =  document.getElementsByClassName("curRegion")[0];
    box.style.display = "none";
}

function showReg(region) {
    // Clear past headers
    headers = document.getElementById("regionHeader").children;
    console.log(headers);
    for( let i = 0; i < headers.length; ++i)
        headers[i].style.display = "none";
    regName = region.getAttribute("name");
    document.getElementById(regName).style.display = "block";

}