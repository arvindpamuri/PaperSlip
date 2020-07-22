
//initialize arrays for tables
let itemList = [];
let doneList = [];

//select the tables
const todo_table = document.querySelector('#todotable');
const done_table = document.querySelector('donetable');

//function called when add button is clicked
function new_item()
{   
    //select the inputs
    const inp1 = document.querySelector('#itemname');
    const inp2 = document.querySelector('#qty');

    //Initialize object
    const item = {};
    
    //add values to objects
    item.name = inp1.value;
    item.qty = inp2.value;

    //add obj to array
    itemList.push(item);

    //display the array of objects
    display_table(itemList);
}

//display the table on screen
function display_table(lst)
{   
    //map html to each item of array
    const all_items = lst.map((item) => display_item(item));
    
    const joined_all_items = all_items.join(``);

    console.log(all_items);
    console.log(joined_all_items);
    //Add to display table
    todo_table.innerHTML = joined_all_items;
}

function display_item({ name, qty })
{   
    return `
        <tr>
            <td style="height:50px;width:100px">${name}</td>
            <td style="height:5px;width:50px">${qty}</td>
            <td style="height:50px;width:50px">
                <button type="button" style='border: 0; padding: 0;'><i class="fas fa-check-circle fa-2x" style="border: none"></i></button>
            </td>
        
        </tr>
        `;
}