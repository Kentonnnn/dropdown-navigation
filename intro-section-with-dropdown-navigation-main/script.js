let features            = document.querySelector("#features");
let arrowDownFeatures   = document.querySelector('#arrow_down_features');
let arrowUpFeatures     = document.querySelector("#arrow_up_features");

let company             = document.querySelector("#company");
let arrowDownCompany   = document.querySelector('#arrow_down_company');
let arrowUpCompany     = document.querySelector("#arrow_up_company");

let todo                = document.querySelector("#todo_list");
let history             = document.querySelector("#history");
let hidden              = true;

features.addEventListener("click", () => {
    if(hidden){
        todo.style.display = "flex";
        arrowDownFeatures.style.display = "none";
        arrowUpFeatures.style.display = "flex";
        features.style.marginBottom = "160px";
        history.style.top = "290px";
        hidden = false;
    }
    else{
        todo.style.display = "none";
        arrowDownFeatures.style.display = "flex";
        arrowUpFeatures.style.display = "none";
        features.style.marginBottom = "0px";
        history.style.top = "130px";
        hidden = true;
    }
});

company.addEventListener("click", () => {
    if(hidden){
        history.style.display = "flex";
        arrowDownCompany.style.display = "none";
        arrowUpCompany.style.display = "flex";
        company.style.marginBottom = "125px";
        hidden = false;
    }
    else{
        history.style.display = "none";
        arrowDownCompany.style.display = "flex";
        arrowUpCompany.style.display = "none";
        company.style.marginBottom = "0px";
        hidden = true;
    }
});

// MOBILE
let body            = document.querySelector("body");
let menuBurger      = document.querySelector("#menu_burger");
let all             = document.querySelector("#all");
let bar             = document.querySelector("#bar");
let cross           = document.querySelector("#cross");

menuBurger.addEventListener("click", () => {
    if(hidden){
        all.style.display       = "flex";
        bar.style.display       = "none";
        cross.style.display     = "flex";
        history.style.display   = "flex";

        todo.style.display   = "none";
        history.style.display = "none";
        arrowDownCompany.style.display = "flex";
        arrowUpCompany.style.display = "none";
        arrowDownFeatures.style.display = "flex";
        arrowUpFeatures.style.display = "none";

        features.style.marginBottom = "0px";
        company.style.marginBottom = "0px";

        hidden = false;
    }
    else{
        all.style.display = "none";
        bar.style.display   = "flex";
        cross.style.display = "none";
        history.style.display   = "none";
        todo.style.display   = "none";
        hidden = true;
    }
});

