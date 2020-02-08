function showAdvantagePaid() {
    advantagePaid = document.getElementById('advantagePaid').style;
    advantagePaid.display = "block";
    document.getElementById("underline1").style.borderBottom = "1px solid green";
    advantagePaid.backgroundColor = "lightgreen";
    advantagePaid.padding = "5px 15px 5px 15px";



 }
 function showDisavantagePaid() {
    disadvantagePaid = document.getElementById('disadvantagePaid').style;
    disadvantagePaid.display = "block";
    disadvantagePaid.backgroundColor = "#FF9CA9";
    document.getElementById("underline2").style.borderBottom = "1px solid rgb(255, 156, 169)";
    disadvantagePaid.padding = "5px 15px 5px 15px";

 }

function showAdvantageFree() {
    advantageFree = document.getElementById('advantageFree').style;
    advantageFree.display = "block";
    advantageFree.backgroundColor = "lightgreen";
    document.getElementById("underline3").style.borderBottom = "1px solid green";
    advantageFree.padding = "5px 15px 5px 15px";


 }


 function showDisadvantageFree() {
     disadvantageFree = document.getElementById('disadvantageFree').style;
     disadvantageFree.display = "block";
     disadvantageFree.backgroundColor = "#FF9CA9";
    document.getElementById("underline4").style.borderBottom = "1px solid rgb(255, 156, 169)";
    disadvantageFree.padding = "5px 15px 5px 15px";


 }

