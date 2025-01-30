//create a footer and add it to the body
const body = document.querySelector('body');
const footer = document.createElement('footer');
body.appendChild(footer);

  
//add a copyright to the footer
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = `<span>&#169 ${thisYear} Marcos</span>`;
footer.appendChild(copyright);

//populate the skills list
const skillsList = ['javascript','css','HTML','GitHub'];
const skillsSection = document.getElementById('skills');
const skillsUl = skillsSection.querySelector('ul');
for (let skill of skillsList){
    let skillItem = document.createElement('li');
    skillItem.innerHTML = skill;
    skillsUl.appendChild(skillItem);
}

// Select the form
const messageForm = document.forms['leave_message'];

// Add an event listener to handle form submission
messageForm.addEventListener('submit', function (event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get form field values
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // Log the form values to the console
  console.log(usersName, usersEmail, usersMessage);

  // Select the messages section and unordered list
  const messageSection = document.querySelector('#messages');
  const messageList = messageSection.querySelector('ul');

  // Create a new list item
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> says: ${usersMessage}</span>
  `;

  // Create a remove button
  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.innerText = 'remove';

  // Add an event listener to the remove button
  removeButton.addEventListener('click', function () {
    const entry = removeButton.parentNode; // Find the parent element
    entry.remove(); // Remove the parent element from the DOM
  });

  // Append the remove button to the new message
  newMessage.appendChild(removeButton);

  // Append the new message to the message list
  messageList.appendChild(newMessage);

  // Reset the form
  messageForm.reset();
});