document.getElementById('autoDonateCheck').addEventListener('change', function() {
    var amountRadios = document.getElementsByName('amount');
    var durationRadios = document.getElementsByName('duration');
    for(var i = 0; i < amountRadios.length; i++) {
        amountRadios[i].disabled = !this.checked;
        durationRadios[i].disabled = !this.checked;
    }
});


let SubMenu=document.getElementById("subMenu");
function toggleMenu(){
    SubMenu.classList.toggle("open-menu");
}


document.getElementById('saveChangesBtn').addEventListener('click', function () {
    // Call the validation function before showing the dialog
    if (validateCardDetails()) {
        document.getElementById('successDialog').showModal();
    } else {
        document.getElementById('errorDialog').showModal();
    }
});
