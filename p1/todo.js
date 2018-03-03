
        window.onload = function () {
            //Build an array containing Customer records.
            var todoarray = new Array();
           
            //Add the data rows.
            for (var i = 0; i < todoarray.length; i++) {
                AddRow(todoarray[i][0], todoarray[i][1]);
            }
        };
 
        function Add() {
            var txtName = document.getElementById("todotxt");
            var txtcbstate = document.getElementById("checkstate");
            AddRow(txtName.value, txtcbstate.value);
            txtName.value = "";
            txtcbstate.value = "";
        };
 
        function Remove(button) {
            // reference of the Row using the Button.
            var row = button.parentNode.parentNode;
            var name = row.getElementsByTagName("TD")[0].innerHTML;
            if (confirm("Do you want to delete: " + name)) {
 
                //Get the reference of the Table.
                var table = document.getElementById("mytable");
 
                //Delete the Table row using it's Index.
                table.deleteRow(row.rowIndex);
            }
        };
 
        function AddRow(name, cbstate) {
            //reference of the Table's TBODY element.
            var tBody = document.getElementById("mytable").getElementsByTagName("TBODY")[0];
 
            //Add Row.
            row = tBody.insertRow(-1);
 
            //Add Name cell.
            var cell = row.insertCell(-1);
            cell.innerHTML = name;
 
            //Add cbstate cell.
            cell = row.insertCell(-1);
            var place=document.getElementById("checkstate");
    var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

            cell.appendChild(checkbox);
 
            //Add Button cell.
            cell = row.insertCell(-1);
            var btnRemove = document.createElement("INPUT");
            btnRemove.type = "button";
            btnRemove.value = "Remove";
            btnRemove.setAttribute("onclick", "Remove(this);");
            cell.appendChild(btnRemove);
        }
    function chb()
{

    var place=document.getElementById("checkstate");
    var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

place.appendChild(checkbox);

}

