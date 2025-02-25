document.getElementById("add-money-card").
addEventListener("click", function(event){
    const hiddenSections = (document.getElementsByClassName("toggle-section"));
    for (const section of hiddenSections) {
        section.style.display = "none";
    }
    document.getElementById("add-money-section").style.display = "block"
})

document.getElementById("transactions-card").
addEventListener("click", function(event){
    const hiddenSections = (document.getElementsByClassName("toggle-section"));
    for (const section of hiddenSections) {
        section.style.display = "none"
    }
    document.getElementById("transactions-section").style.display = "block"
})

document.getElementById("cashout-card").
addEventListener("click", function(event){
    const hiddenSections = (document.getElementsByClassName("toggle-section"));
    for (const section of hiddenSections) {
        section.style.display = "none"
    }
    document.getElementById("cashout-section").style.display = "block"
})
