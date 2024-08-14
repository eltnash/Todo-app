# Todo-app
 designing a productivity app


The overall objective of this code is to create a dynamic to-do list application that allows users to add tasks, mark them as completed, and track the number of completed tasks. The application provides a user-friendly interface with sections for uncompleted and completed tasks, allowing users to manage their tasks efficiently.

### Function Objectives and How They Contribute to the Overall Objective:

1. **`DOMContentLoaded` Event Listener**:
   - **Objective**: Ensures that the JavaScript code runs only after the entire HTML document is fully loaded.
   - **Contribution**: Prevents errors by making sure that all DOM elements are available before the script tries to interact with them.

2. **`placeholdertext()` Function**:
   - **Objective**: Displays a placeholder image or message in the to-do list container before any tasks are added.
   - **Contribution**: Enhances the user experience by providing visual guidance when the to-do list is empty.

3. **`createToDoSection()` Function**:
   - **Objective**: Creates two main sections within the to-do list container—one for uncompleted tasks and one for completed tasks.
   - **Contribution**: Establishes the structure of the to-do list, enabling the application to categorize and display tasks based on their completion status.

4. **`createListItem(ulElement)` Function**:
   - **Objective**: Creates individual to-do list items, each with a checkbox and a text input field for the task description.
   - **Contribution**: Allows users to add new tasks dynamically, enabling the core functionality of the to-do list.

5. **`moveToCompleted(listItem)` Function**:
   - **Objective**: Moves a to-do item from the uncompleted list to the completed list when its checkbox is checked. Also updates the count of completed tasks.
   - **Contribution**: Provides the ability to mark tasks as completed, which is crucial for task management. The count update helps users track their progress.

6. **`removeFromCompleted(listItem)` Function**:
   - **Objective**: Removes a to-do item from the completed list if its checkbox is unchecked, and updates the count of completed tasks.
   - **Contribution**: Allows users to move tasks back to the uncompleted list if needed, maintaining flexibility in task management. The count update ensures that the UI accurately reflects the number of completed tasks.

7. **`addButton.addEventListener('click', () => { ... })`**:
   - **Objective**: Triggers the creation of a new to-do section (if it doesn't already exist) or adds a new task to the uncompleted list when the "Add New Item" button is clicked.
   - **Contribution**: Facilitates user interaction by enabling the addition of new tasks. It also removes the placeholder text once the user starts adding tasks, keeping the interface clean.

### Summary:
This code creates an interactive to-do list application that starts with a placeholder message and allows users to add, complete, and track tasks. The functions work together to create the list's structure, manage the addition of tasks, and handle the movement of tasks between the uncompleted and completed sections. The app dynamically updates based on user actions, ensuring a smooth and responsive user experience.