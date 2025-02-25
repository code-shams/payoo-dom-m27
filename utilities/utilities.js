// Takes two parameters.
// First parameter is the id of the card thats going to clicked and where the even listener is going to be applied to.
// Second parameter is the id of the section that's going to be visible while all the other sections remain hidden.
function handleToggle (cardId, toggleSection){
    document.getElementById(cardId).
    addEventListener("click", function(){
        const hiddenSections = (document.getElementsByClassName("toggle-section"));
        for (const section of hiddenSections) {
            section.style.display = "none";
        }
        document.getElementById(toggleSection).style.display = "block";
    })
}