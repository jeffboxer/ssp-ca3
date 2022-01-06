
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var id=document.getElementById("id_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var id_data=id.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 id.innerHTML="<input type='text' id='id_text"+no+"' value='"+id_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save_row(no)
{
   
 var name_val=document.getElementById("name_text"+no).value;
 var id_val=document.getElementById("id_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("id_row"+no).innerHTML=id_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}


function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
    if(document.getElementById("new_name").value=="" || document.getElementById("new_id").value=="" ||  document.getElementById("new_age").value=="")
    {alert("You need to fill all the fields before adding a new row.");}
    else{
 var new_name=document.getElementById("new_name").value;
 var new_id=document.getElementById("new_id").value;
 var new_age=document.getElementById("new_age").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='id_row"+table_len+"'>"
 +new_id+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
 document.getElementById("new_name").value="";
 document.getElementById("new_id").value="";
 document.getElementById("new_age").value="";
}
}

$(document).ready(function ()
{
	draw_table();
});