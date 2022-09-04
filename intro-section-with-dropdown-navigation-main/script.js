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
        hidden = false;
    }
    else{
        todo.style.display = "none";
        arrowDownFeatures.style.display = "flex";
        arrowUpFeatures.style.display = "none";
        hidden = true;
    }
});

company.addEventListener("click", () => {
    if(hidden){
        history.style.display = "flex";
        arrowDownCompany.style.display = "none";
        arrowUpCompany.style.display = "flex";
        hidden = false;
    }
    else{
        history.style.display = "none";
        arrowDownCompany.style.display = "flex";
        arrowUpCompany.style.display = "none";
        hidden = true;
    }
});