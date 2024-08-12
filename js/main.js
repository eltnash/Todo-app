document.addEventListener('DOMContentLoaded', () => { 
    // This ensures that the JavaScript code runs only after the entire document is fully loaded.

    const addButton = document.querySelector('.add-btn');
    // Selects the 'Add New Item' button that will be used to trigger the creation of new to-do list items.

    const toDoListContainer = document.querySelector('.to-do-list');
    // Selects the container where the to-do sections and list items will be appended.



    let placeholderElement;
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
        // Function to create the main to-do sections: one for uncompleted tasks and one for completed tasks.
        
        /*******************CREATE HTML TAGS*********************** */
        const section1 = document.createElement('section');
        const heading1 = document.createElement('h5');
        const span1 = document.createElement('span');
        const ul1 = document.createElement('ul');

        const section2 = document.createElement('section');
        const heading2 = document.createElement('h5');
        const span2 = document.createElement('span');
        const ul2 = document.createElement('ul');

        /*****CREATE CLASS ATTRIBUTES AND CONTENT INSIDE HTML TAGS******* */
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
        // Automatically creates the first to-do list item in the uncompleted list section.
    }

    function createListItem(ulElement) {
        // Function to create individual to-do list items, including a checkbox and a text input.

        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        const textInput = document.createElement('input');

        checkbox.type = 'checkbox';
        checkbox.className = 'rounded-checkbox';
        textInput.type = 'text';
        textInput.className = 'text-input';
        // Setting up the checkbox and text input for the to-do item.

        listItem.appendChild(checkbox);
        listItem.appendChild(textInput);
        // Adding the checkbox and text input to the list item.

        ulElement.appendChild(listItem);
        // Appending the list item to the provided unordered list element (either uncompleted or completed list).

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                moveToCompleted(listItem);
            }
        });
        // Adds an event listener to the checkbox. If the checkbox is checked, the item is moved to the completed list.
    }

    function moveToCompleted(listItem) {
        // Function to move a to-do item to the completed list when the checkbox is checked.

        const completedList = document.querySelector('.completed-list');
        const completedCountSpan = document.querySelector('.section-2 h5 span');
        const textInput = listItem.querySelector('.text-input');

        if (textInput.value.trim() === '') {
            // Prevents moving an item to the completed list if the text input is empty.

            listItem.querySelector('.rounded-checkbox').checked = false;
            alert('Please enter a task before marking it as complete.');
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
                removeFromCompleted(listItem);
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

