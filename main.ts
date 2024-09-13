// Get reference to the form and display area
document.getElementById('resume-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get input values, safely check if elements exist
    const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
    const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
    const objective = (document.getElementById('objective') as HTMLTextAreaElement)?.value || '';
    const education = (document.getElementById('education') as HTMLTextAreaElement)?.value || '';
    const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value || '';
    const skills = (document.getElementById('skill') as HTMLTextAreaElement)?.value || ''; // Fixed the ID to 'skill'
    const languages = (document.getElementById('languages') as HTMLTextAreaElement)?.value || '';

    // Get the resume display container
    const resumeDisplay = document.getElementById('resume-display');
    
    // Function to generate the resume display
    const generateResume = () => {
        return `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <h3>Objective</h3>
            <p>${objective}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Languages</h3>
            <p>${languages}</p>
            <button id="edit-resume">Edit</button>
        `;
    };

    // Function to generate the editable form
    const generateEditableForm = () => {
        return `
            <h2>Resume</h2>
            <p><strong>Name:</strong> <input type="text" id="edit-name" value="${name}"></p>
            <p><strong>Email:</strong> <input type="email" id="edit-email" value="${email}"></p>
            <p><strong>Phone Number:</strong> <input type="tel" id="edit-phone" value="${phone}"></p>
            <h3>Objective</h3>
            <textarea id="edit-objective">${objective}</textarea>
            <h3>Education</h3>
            <textarea id="edit-education">${education}</textarea>
            <h3>Experience</h3>
            <textarea id="edit-experience">${experience}</textarea>
            <h3>Skills</h3>
            <textarea id="edit-skills">${skills}</textarea>
            <h3>Languages</h3>
            <textarea id="edit-languages">${languages}</textarea>
            <button id="save-resume">Save</button>
        `;
    };

    // Generate and display the resume if the container exists
    if (resumeDisplay) {
        resumeDisplay.innerHTML = generateResume();

        // Add click listener for "Edit" button
        document.getElementById('edit-resume')?.addEventListener('click', function () {
            resumeDisplay.innerHTML = generateEditableForm();

            // Add listener for "Save" button to save changes
            document.getElementById('save-resume')?.addEventListener('click', function () {
                // Update the variables with edited values
                const updatedName = (document.getElementById('edit-name') as HTMLInputElement)?.value || '';
                const updatedEmail = (document.getElementById('edit-email') as HTMLInputElement)?.value || '';
                const updatedPhone = (document.getElementById('edit-phone') as HTMLInputElement)?.value || '';
                const updatedObjective = (document.getElementById('edit-objective') as HTMLTextAreaElement)?.value || '';
                const updatedEducation = (document.getElementById('edit-education') as HTMLTextAreaElement)?.value || '';
                const updatedExperience = (document.getElementById('edit-experience') as HTMLTextAreaElement)?.value || '';
                const updatedSkills = (document.getElementById('edit-skills') as HTMLTextAreaElement)?.value || '';
                const updatedLanguages = (document.getElementById('edit-languages') as HTMLTextAreaElement)?.value || '';

                // Re-generate resume display with updated values
                resumeDisplay.innerHTML = `
                    <h2>Resume</h2>
                    <p><strong>Name:</strong> ${updatedName}</p>
                    <p><strong>Email:</strong> ${updatedEmail}</p>
                    <p><strong>Phone Number:</strong> ${updatedPhone}</p>
                    <h3>Objective</h3>
                    <p>${updatedObjective}</p>
                    <h3>Education</h3>
                    <p>${updatedEducation}</p>
                    <h3>Experience</h3>
                    <p>${updatedExperience}</p>
                    <h3>Skills</h3>
                    <p>${updatedSkills}</p>
                    <h3>Languages</h3>
                    <p>${updatedLanguages}</p>
                    <button id="edit-resume">Edit</button>
                `;

                // Re-attach the edit button listener
                document.getElementById('edit-resume')?.addEventListener('click', function () {
                    resumeDisplay.innerHTML = generateEditableForm();
                });
            });
        });
    } else {
        console.error('Resume display container not found');
    }
});
