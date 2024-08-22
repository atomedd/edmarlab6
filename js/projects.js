
function nameProjects() {
    const projectNames = [
        "Project 1",
        "Project 2",
        "Project 3",
        "Project 4",
        "Project 5"
    ];

    projectNames.forEach((project, index) => {
        const userInput = prompt(`Please enter a name for ${project}:`, project);
        

        if (userInput) {
            document.getElementById(`project-name-${index + 1}`).textContent = userInput;
        }
    });
}


window.onload = nameProjects;