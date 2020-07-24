
//initialize arrays for tables
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
    display_table(todo_table, todoList);
    console.log(todoList);
    console.log(doneList);
}

//display the table on screen
function display_table(table, lst)
{   
    //map html to each item of array
    const all_items = lst.map((item) => display_item(item));
    
    const joined_all_items = all_items.join(``);

    //Add to display table
    table.innerHTML = joined_all_items;
}

function item_done(seconds)
{   
    console.log(todoList);
    console.log(doneList);
    for(let i=0; i<todoList.length; i++)
    {   
        if (todoList[i].time == seconds)
        {
            doneList.push(todoList[i]);
            todoList.splice(i,1);
            break;
        }
    }
    display_table(done_table, doneList);
    display_table(todo_table, todoList);
}

function display_item({ name, qty, time })
{   
    console.log(time);
    return `
        <li class="list-group-item list-group-item-secondary d-flex justify-content-between">
            <div class='d-flex flex-column'>${name}</div>
            <div>
                ${qty}
            </div>
                <button type="button" class="btn btn-success" onClick="item_done(${time.valueOf()})"><i class="fas fa-check-circle fa-2x" style="border: none"></i></button>
            </div
        </li>
        `;
}