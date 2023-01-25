const flagsElement= document.getElementById("flags");
let textsToChange= document.querySelectorAll("data-section");
const changeLanguage= async language=>{
    const requestJson= await fetch(`./languages/${language}.json`);
    const texts= await requestJson.json();
    for ( const textToChange of textsToChange){
        const section= textsToChange.dataset.section;
        const value= textsToChange.dataset.value;
        textsToChange.innerHTML=texts[section][value];
    }
}
flagsElement.addEventListener("click",(e) => {changeLanguage(e.target.parentElement.dataset.language);});