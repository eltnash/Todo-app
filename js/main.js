document.addEventListener('DOMContentLoaded', () => { 
    // This ensures that the JavaScript code runs only after the entire document is fully loaded.
    
    const addButton = document.querySelector('.add-btn');
    // Selects the 'Add New Item' button that will be used to trigger the creation of new to-do list items.

    const toDoListContainer = document.querySelector('.to-do-list');
    // Selects the container where the to-do sections and list items will be appended.

    

    let placeholderElement;
    // Function Objective
    // Function declaration (functions in JavaScript are objects themselves)
    function placeholdertext(){

        // Creating new HTML elements (these are objects in the DOM)
        placeholderElement = document.createElement("div");
        const addImageBackground = document.createElement("img");

        // Setting properties on the placeholderElement object
        placeholderElement.className = "instructional-message";

        // Using methods to modify the addImageBackground object
        addImageBackground.setAttribute('src', 'images/add-circle-background.png');
        addImageBackground.setAttribute('alt', 'backgroundimage');

        // Adding the addImageBackground object as a child to placeholderElement
        placeholderElement.appendChild(addImageBackground);

        // Adding the placeholderElement object as a child to the toDoListContainer
        toDoListContainer.appendChild(placeholderElement);
    }

    // Calling the function (which is an object) to execute its code
    placeholdertext();


    function createToDoSection() {
        //Function objective
        // Function to create the main to-do sections: one for uncompleted tasks and one for completed tasks.
        
        /*******************CREATE HTML TAGS*********************** */
        //Objects referencing methods
        const section1 = document.createElement('section');
        const heading1 = document.createElement('h5');
        const span1 = document.createElement('span');
        const ul1 = document.createElement('ul');

        const section2 = document.createElement('section');
        const heading2 = document.createElement('h5');
        const span2 = document.createElement('span');
        const ul2 = document.createElement('ul');

        /*****CREATE CLASS ATTRIBUTES AND CONTENT INSIDE HTML TAGS******* */
        // Object referencing properties
        section1.className = 'section-1';
        heading1.textContent = 'shared with ';
        span1.textContent = '1 person';
        ul1.className = 'uncompleted-list';
        // Setting up the first section for uncompleted tasks with a heading and a list.

        section2.className = 'section-2';
        heading2.textContent = 'completed ';
        span2.textContent = '(0)';
        ul2.className = 'completed-list';
        // Setting up the second section for completed tasks with a heading and a list.


        /**** ASSIGN CHILD ELEMENTS INTO REPSECTIVE PARENT CONTAINERS*****/
        //Objects referencing methods
        heading1.appendChild(span1);
        heading2.appendChild(span2);
        // Appending the span elements to their respective headings.

        section1.appendChild(heading1);
        section1.appendChild(ul1);
        // Adding the heading and uncompleted list to section1.

        section2.appendChild(heading2);
        section2.appendChild(ul2);
        // Adding the heading and completed list to section2.

        toDoListContainer.appendChild(section1);
        toDoListContainer.appendChild(section2);
        // Appending both sections to the main container for to-do lists.

        createListItem(ul1);
        // we are calling the  createListItem function in the createtodo section which then Automatically creates the first to-do list item in the uncompleted list section.
    }

    function createListItem(ulElement) {
        // Function Objective
        // Function to create individual to-do *LIST* items (li tags), including a *CHECKBOX* (input tag) and a *TEXT INPUT* (input tag). also we are creating an event listener method for the *CHECKBOX* so that if the checkbox is checked, the item is moved to the completed list


        /*******************CREATE HTML TAGS*********************** */
        //Objects referencing methods
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        const textInput = document.createElement('input');
        
        /*****CREATE CLASS ATTRIBUTES INSIDE HTML TAGS******* */
        // Object referencing properties
        checkbox.type = 'checkbox';
        checkbox.className = 'rounded-checkbox';
        textInput.type = 'text';
        textInput.className = 'text-input';
        // Setting up the checkbox and text input for the to-do item.

        // Adding placeholder text
        textInput.placeholder = 'Write your task here...';
        textInput.style.color = "#3B3B71"
        // Setting up the checkbox and text input for the to-do item.

        

        /**** ASSIGN CHILD ELEMENTS INTO REPSECTIVE PARENT CONTAINERS*****/
        //Objects referencing methods
        listItem.appendChild(checkbox);
        listItem.appendChild(textInput);
        // Adding the checkbox and text input to the list item container.

        ulElement.appendChild(listItem);
        // Appending the list item to the provided unordered list element (either uncompleted or completed list).
        // These listItems in li are dynamic. they only need to be there when a click event happens i.e only when we are adding a new list item and the list items will need to dissapear from our list once we have checked the list item as completed and be moved to the completed list items section

        // Automatically focus the text input field to show the blinking cursor
        textInput.focus();
 

        // Adds an event listener to the checkbox. If the checkbox is checked, the item is moved to the completed list.
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                moveToCompleted(listItem); // here we are calling the movetocompleted function  another function that will be able to perform the click action action that we want to do
            }
        });

    }     

    function moveToCompleted(listItem) {
        //Function Objective
        // Function to move a to-do item to the completed list when the checkbox is checked.
        // to count the number of items currently present in the completed list and display the result
        
        //What data do we need to accomplish this ?
        //What form does that data take ? html elements

        //DATA to be collected
        const completedList = document.querySelector('.completed-list');
        // container to house the individual completed list items.
        const completedCountSpan = document.querySelector('.section-2 h5 span');
        // the exact element which will shouw the number of items in the completed list.
        const textInput = listItem.querySelector('.text-input');
        // the elemnent which houses the content to be moved.
        

        //Action to be performed
        //Purpose: The if statement checks if the user has not entered any meaningful text in the textInput field.
        if (textInput.value.trim() === '') {
            // Prevents moving an item to the completed list if the text input is empty.

            listItem.querySelector('.rounded-checkbox').checked = false;
            // for the selected list item (li), set its child element(.rounded-checkbox (input)) checkbox property to false.
            alert('Please enter a task before marking it as complete.');
            // create an alert message on the browser notifying the user on the action to take
            return;
        }

        listItem.remove();
        textInput.setAttribute('readonly', true);
        // Removes the item from the uncompleted list and makes the text input readonly to prevent further edits.

        completedList.appendChild(listItem);
        // Appends the item to the completed list.

        const completedCount = completedList.children.length;
        completedCountSpan.textContent = `(${completedCount})`;
        // Updates the completed count in the heading.

        listItem.querySelector('.rounded-checkbox').addEventListener('change', function() {
            if (!this.checked) {
                removeFromCompleted(listItem); //calling the removefromcompleteed function in the movetocompleted function
            }
        });
        // Adds an event listener to the checkbox within the completed list. If unchecked, the item is removed from the completed list.
    }

    function removeFromCompleted(listItem) {
        // Function to remove a to-do item from the completed list.

        const completedList = document.querySelector('.completed-list');
        const completedCountSpan = document.querySelector('.section-2 h5 span');

        listItem.remove();
        // Removes the item from the completed list.

        const completedCount = completedList.children.length;
        completedCountSpan.textContent = `(${completedCount})`;
        // Updates the completed count in the heading.
    }

    addButton.addEventListener('click', () => {

        if (placeholderElement) {
            placeholderElement.remove(); // Remove the placeholder text
            placeholderElement = null;   // Clear the reference
        }

        let existingSection1 = toDoListContainer.querySelector('.section-1');
        let existingSection2 = toDoListContainer.querySelector('.section-2');
        // Checks if the to-do sections already exist.

        if (!existingSection1 || !existingSection2) {
            createToDoSection();
        } else {
            let ulElement = existingSection1.querySelector('.uncompleted-list');
            createListItem(ulElement);
        }
        // If the sections don't exist, they are created. If they do exist, a new to-do list item is added to the uncompleted list.
    });
});

