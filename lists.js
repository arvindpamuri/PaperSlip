//initialize global arrays for tables
let todoList = [];
let doneList = [];

//select the tables
const todo_table = document.querySelector('#todotable');
const done_table = document.querySelector('#donetable');

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
    item.time = new Date().valueOf();

    //add obj to array
    todoList.push(item);

    //display the array of objects
    display_table(todoList, todo_table);
}

function item_done(seconds)
{   
    for(let i=0; i<todoList.length; i++)
    {   
        if (todoList[i].time == seconds)
        {
            doneList.push(todoList[i]);
            todoList.splice(i,1);
            break;
        }
    }
    display_table(todoList, todo_table);
    display_table(doneList, done_table);
}

function delete_item(seconds) 
{
    console.log("check")

    for(let i=0; i<doneList.length; i++)
    {
        if (doneList[i].time == seconds)
        {
            doneList.splice(i,1);
            break;
        }
    }

    display_table(doneList, done_table);
}


//display the table on screen
function display_table(lst, table)
{   
    let all_items;
    //map html to each item of array
    if(table.id === 'todotable')
    {
        all_items = lst.map((item) => display_todo_item(item));
    }

    else if(table.id === 'donetable')
    {   
        all_items = lst.map((item) => display_done_item(item));
    }
    
    const joined_all_items = all_items.join(``);

    //Add to display table
    table.innerHTML = joined_all_items;

}

function display_todo_item({ name, qty, time })
{   
    return `
        <li class="list-group-item list-group-item-secondary justify-content-between mb-0 mr-0">
        <div class="container">
            <div class="row">
                <span class="col-6 flex-column">${name}</span>
                <h4 class="col-3"><span class="badge badge-pill badge-light">${qty}</span></h4>
                <div class="col-3"><button type="button" class="btn btn-success" onClick="item_done(${time})"><i class="fas fa-check-circle fa-1x" style="border: none"></i></button></div>
            </div
        </li>
        `;
}
S
function display_done_item({ name, qty, time })
{   
    return `
        <li class="list-group-item list-group-item-secondary d-flex justify-content-between">
        <h5><div class='d-flex flex-column'>${name}</div><h5>
        <h4><span class="badge badge-pill badge-light">${qty}</span></h4>
            <button type="button" class="btn btn-danger" onClick="delete_item(${time})"><i class="fas fa-trash fa-1x" style="border: none"></i></button>
            </div
        </li>
        `;
}

function clearList(lst) 
{
    console.log(lst)
    if (lst === "todo")
    {
        todoList = [];
        display_table(todoList, todo_table);
    }
    
    else
    {
        doneList = [];
        display_table(doneList, done_table);

    }

    
}

