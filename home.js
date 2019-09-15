var ID;
function enable_text(id)
{
    var checkBox = document.getElementById(id.id);
    if (checkBox.checked == true){
        textarea.disabled = false;
        ID = id.id;
    } 
    else{
        textarea.disabled = true;
    }
}

function get_value()
{
    console.log(ID)
    var text=document.getElementById("textarea").value;
    var column = document.getElementById(ID+'_value');
    column.innerHTML=text;    
}