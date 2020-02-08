var modal = document.querySelector(".modal");
    var trigger = document.getElementById("modalTrigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
        
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);




    function showDivQuestion() {
        document.getElementById('PromQuestion').style.display = "block";
     }

     function showDivbalcony() {
        document.getElementById('BalconyQuestion').style.display = "block";
     }



     function dodajAktywne(elem) {
        // get all 'a' elements
        var a = document.getElementsByTagName('a');


        // add 'active' classs to the element that was clicked
        elem.classList.add('active');
    }