$(function () {
    $('.js-sweetalert').on('click', function (e) {
        e.preventDefault();
        var type = $(this).data('type');
        if (type === 'basic') {
            showBasicMessage();
        }
        else if (type === 'with-title') {
            showWithTitleMessage();
        }
        else if (type === 'success') {
            showSuccessMessage();
        }
        else if (type === 'confirm') {
            showConfirmMessage();
        }
        else if (type === 'confirm2') {
            showConfirmMessage2();
        }
        else if (type === 'upload-prompt') {
            showUploadMessage();
            $('.dropify').dropify();
        }
        else if (type === 'cancel') {
            showCancelMessage();
        }
        else if (type === 'with-custom-icon') {
            showWithCustomIconMessage();
        }
        else if (type === 'html-message') {
            showHtmlMessage();
        }
        else if (type === 'autoclose-timer') {
            showAutoCloseTimerMessage();
        }
        else if (type === 'prompt2') {
            showPromptMessage2();
        }
        else if (type === 'prompt') {
            showPromptMessage();
        }
        else if (type === 'prompt5') {
            showPromptMessage5();
        }
        else if (type === 'prompt3') {
            
            const checked = document.getElementById('livr').checked;
            if(!checked){
                document.getElementById('livr').checked = true ;
                showPromptMessage3();
            } else {
                document.getElementById('livr').checked = false ;
            }
           
        }
        else if (type === 'prompt4') {
            const checked2 = document.getElementById('reun').checked;
            if(!checked2){
                document.getElementById('reun').checked = true ;
                showPromptMessage4();
            } else {
                document.getElementById('reun').checked = false ;
            }
        }
        else if (type === 'ajax-loader') {
            showAjaxLoaderMessage();
        }
    });
});

//These codes takes from http://t4t5.github.io/sweetalert/
function showBasicMessage() {
    swal("Here's a message!");
}

function showWithTitleMessage() {
    swal("Here's a message!", "It's pretty, isn't it?");
}

function showSuccessMessage() {
    swal("Good job!", "You clicked the button!", "success");
}

function showConfirmMessage() {
    swal({
        title: "Vous êtes sûr?",
        text: "Vous ne pourrez pas récupérer ce projet!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc3545",
        confirmButtonText: "Confirmer!",
        closeOnConfirm: false
    }, function () {
        swal("Supprimé!", "Votre projet a été supprimé.", "success");
    });
}

function showConfirmMessage2() {
    swal({
        title: "Vous êtes sûr?",
        text: "",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc3545",
        confirmButtonText: "Confirmer!",
        closeOnConfirm: false
    }, function () {
        swal("Supprimé!", "l'encadreur a été supprimé.", "success");
    });
}


function showCancelMessage() {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc3545",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel plx!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        } else {
            swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
    });
}

function showWithCustomIconMessage() {
    swal({
        title: "Sweet!",
        text: "Here's a custom image.",
        imageUrl: "../assets/images/sm/avatar2.jpg"
    });
}

function showHtmlMessage() {
    swal({
        title: "HTML <small>Title</small>!",
        text: "A custom <span style=\"color: #CC0000\">html<span> message.",
        html: true
    });
}

function showAutoCloseTimerMessage() {
    swal({
        title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
    });
}

function showPromptMessage() {
    swal({
        title: "",
        text: "Donner l'addresse email de l'encadreur que vous voulez ajouter!",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Addresse email"
    }, function (inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
            swal.showInputError("Donner l'addresse email!"); return false
        }
        swal("", "l'addresse email: " + inputValue + "a été ajoutée", "success");
    });
}

function showPromptMessage2() {
    swal({
        title: "",
        text: "Donner l'addresse email de l'étudiant que vous voulez ajouter!",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Addresse email"
    }, function (inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
            swal.showInputError("Donner l'addresse email!"); return false
        }
        swal("", "l'addresse email: " + inputValue + "a été ajoutée", "success");
    });
}
function showPromptMessage5() {
    swal({
        title: "",
        text: "Donnez le nom de la phase",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Nom de la phase"
    }, function (inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
            swal.showInputError("Donnez le nom de la phase"); return false
        }
        //swal("", "l'addresse email: " + inputValue + "a été ajoutée", "success");
    });
}
async function showUploadMessage() {
    const { value: formValues } = await Swal.fire({
        //title: 'Donnez les details de livrable',
        html:'<div class="body"> <div class="form-group"> <textarea id="upload" rows="2" class="form-control no-resize pr" placeholder="Veuillez taper ce que vous voulez..."></textarea>  </div><input type="file" class="dropify"> <div class="row"> <div class="col-6"></div><div class="col-6" style="text-align: right;"></div> </div></div>',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('upload').value,
            ]
        }
    })
    if (formValues) {
        Swal.fire(json.stringify(formValues))
    }
}

async function showPromptMessage3() {
    const { value: formValues } = await Swal.fire({
        title: 'Donnez les details de livrable',
        html:

            '<input type="text" style="margin-top : 20px ; " id="swal-input1" class="form-control pt pr" placeholder="Type" >' +
            '<input type="text" style="margin-top : 20px ; "  id="swal-input2" data-provide="datepicker" data-date-autoclose="true" class="form-control pt pr" data-date-format="dd/mm/yyyy" placeholder="Deadline">',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value,
            ]
        }
    })
    if (formValues) {
        Swal.fire(json.stringify(formValues))
    }
}
async function showPromptMessage4() {
    const { value: formValues } = await Swal.fire({
        title: 'Donnez les details de Réunion',
        html:

        '<input  style="margin-top:20px;" type="text" id="input2" class="form-control pt pr time24" placeholder="Heure">' +
        '<input style="margin-top:20px;" type="text" id="input1" data-provide="datepicker" data-date-autoclose="true" class="form-control pt pr" data-date-format="dd/mm/yyyy" placeholder="Date">' +
            '<input  style="margin-top:20px;" type="text" id="input3" class="form-control pt pr" placeholder="Lieu">',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('input1').value,
                document.getElementById('input2').value,
                document.getElementById('input3').value,
            ]
        }
    })
    if (formValues) {
        Swal.fire(json.stringify(formValues))
    }
}

function showAjaxLoaderMessage() {
    swal({
        title: "Ajax request example",
        text: "Submit to run ajax request",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
    }, function () {
        setTimeout(function () {
            swal("Ajax request finished!");
        }, 2000);
    });
}

