let media500            = window.matchMedia("(max-width: 500px)");

let fondObscure         = document.querySelector("#fond_obscure");

let features            = document.querySelector("#features");
let arrowDownFeatures   = document.querySelector('#arrow_down_features');
let arrowUpFeatures     = document.querySelector("#arrow_up_features");

let company             = document.querySelector("#company");
let arrowDownCompany    = document.querySelector('#arrow_down_company');
let arrowUpCompany      = document.querySelector("#arrow_up_company");

let todo                = document.querySelector("#todo_list");
let history             = document.querySelector("#history");
let hidden              = true;

features.addEventListener("click", () => {

        if(hidden){
            todo.style.display = "flex";
            arrowDownFeatures.style.display = "none";
            arrowUpFeatures.style.display = "flex";
            // features.style.marginBottom = "160px";
            // history.style.top = "290px";
            hidden = false;
        }
        else{
            todo.style.display = "none";
            arrowDownFeatures.style.display = "flex";
            arrowUpFeatures.style.display = "none";
            // features.style.marginBottom = "0px";
            // history.style.top = "130px";
            hidden = true;
        }
});

company.addEventListener("click", () => {

        if(hidden){
            history.style.display = "flex";
            arrowDownCompany.style.display = "none";
            arrowUpCompany.style.display = "flex";
            // company.style.marginBottom = "125px";
            hidden = false;
        }
        else{
            history.style.display = "none";
            arrowDownCompany.style.display = "flex";
            arrowUpCompany.style.display = "none";
            // company.style.marginBottom = "0px";
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
    if(media500.matches){

        if(hidden){
            bar.style.display = "none";
            cross.style.display = "flex";
            fondObscure.style.display = "block";

            all.style.display = "flex";

                features.addEventListener("click", () => {

                    if(hidden){

                        arrowDownFeatures.style.display = "none";
                        arrowUpFeatures.style.display = "flex";
                        features.style.marginBottom = "160px";
                        todo.style.display = "flex";

                        history.style.top = "290px";

                        hidden = true;
                    }
                    else{
                        arrowDownFeatures.style.display = "flex";
                        arrowUpFeatures.style.display = "none";
                        features.style.marginBottom = "0px";
                        todo.style.display = "none";

                        history.style.top = "130px";

                        hidden = false;
                    }
                });

                company.addEventListener("click", () => {

                    if(hidden){

                        arrowDownCompany.style.display = "none";
                        arrowUpCompany.style.display = "flex";
                        company.style.marginBottom = "125px";

                        history.style.display = "flex";
    
                        hidden = true;
                    }
                    else{
                        arrowDownCompany.style.display = "flex";
                        arrowUpCompany.style.display = "none";
                        company.style.marginBottom = "0px";

                        history.style.display = "none";

                        hidden = false;
                    }
                });
            

            hidden = false;
        }

        else{

            history.style.top = "130px";

            bar.style.display = "flex";
            cross.style.display = "none";

            all.style.display = "none";

            features.style.marginBottom = "0px";
            company.style.marginBottom = "0px";

            todo.style.display = "none";
            history.style.display = "none";

            arrowDownFeatures.style.display = "flex";
            arrowUpFeatures.style.display = "none";

            arrowDownCompany.style.display = "flex";
            arrowUpCompany.style.display = "none";

            fondObscure.style.display = "none";

            hidden = true;
        }
    }
});

