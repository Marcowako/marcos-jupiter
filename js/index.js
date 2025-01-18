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