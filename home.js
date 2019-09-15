function enable_text(id)
{
    var checkBox = document.getElementById(id.id);
    var  textarea = document.getElementById("textarea");
    if (checkBox.checked == true){
        textarea.disabled = false;
    } 
}