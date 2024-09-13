var _a;
// Get reference to the form and display area
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    e.preventDefault();
    // Get input values, safely check if elements exist
    var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || '';
    var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || '';
    var phone = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value) || '';
    var objective = ((_d = document.getElementById('objective')) === null || _d === void 0 ? void 0 : _d.value) || '';
    var education = ((_e = document.getElementById('education')) === null || _e === void 0 ? void 0 : _e.value) || '';
    var experience = ((_f = document.getElementById('experience')) === null || _f === void 0 ? void 0 : _f.value) || '';
    var skills = ((_g = document.getElementById('skill')) === null || _g === void 0 ? void 0 : _g.value) || ''; // Fixed the ID to 'skill'
    var languages = ((_h = document.getElementById('languages')) === null || _h === void 0 ? void 0 : _h.value) || '';
    // Get the resume display container
    var resumeDisplay = document.getElementById('resume-display');
    // Function to generate the resume display
    var generateResume = function () {
        return "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n            <h3>Objective</h3>\n            <p>").concat(objective, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <h3>Languages</h3>\n            <p>").concat(languages, "</p>\n            <button id=\"edit-resume\">Edit</button>\n        ");
    };
    // Function to generate the editable form
    var generateEditableForm = function () {
        return "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> <input type=\"text\" id=\"edit-name\" value=\"".concat(name, "\"></p>\n            <p><strong>Email:</strong> <input type=\"email\" id=\"edit-email\" value=\"").concat(email, "\"></p>\n            <p><strong>Phone Number:</strong> <input type=\"tel\" id=\"edit-phone\" value=\"").concat(phone, "\"></p>\n            <h3>Objective</h3>\n            <textarea id=\"edit-objective\">").concat(objective, "</textarea>\n            <h3>Education</h3>\n            <textarea id=\"edit-education\">").concat(education, "</textarea>\n            <h3>Experience</h3>\n            <textarea id=\"edit-experience\">").concat(experience, "</textarea>\n            <h3>Skills</h3>\n            <textarea id=\"edit-skills\">").concat(skills, "</textarea>\n            <h3>Languages</h3>\n            <textarea id=\"edit-languages\">").concat(languages, "</textarea>\n            <button id=\"save-resume\">Save</button>\n        ");
    };
    // Generate and display the resume if the container exists
    if (resumeDisplay) {
        resumeDisplay.innerHTML = generateResume();
        // Add click listener for "Edit" button
        (_j = document.getElementById('edit-resume')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', function () {
            var _a;
            resumeDisplay.innerHTML = generateEditableForm();
            // Add listener for "Save" button to save changes
            (_a = document.getElementById('save-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                // Update the variables with edited values
                var updatedName = ((_a = document.getElementById('edit-name')) === null || _a === void 0 ? void 0 : _a.value) || '';
                var updatedEmail = ((_b = document.getElementById('edit-email')) === null || _b === void 0 ? void 0 : _b.value) || '';
                var updatedPhone = ((_c = document.getElementById('edit-phone')) === null || _c === void 0 ? void 0 : _c.value) || '';
                var updatedObjective = ((_d = document.getElementById('edit-objective')) === null || _d === void 0 ? void 0 : _d.value) || '';
                var updatedEducation = ((_e = document.getElementById('edit-education')) === null || _e === void 0 ? void 0 : _e.value) || '';
                var updatedExperience = ((_f = document.getElementById('edit-experience')) === null || _f === void 0 ? void 0 : _f.value) || '';
                var updatedSkills = ((_g = document.getElementById('edit-skills')) === null || _g === void 0 ? void 0 : _g.value) || '';
                var updatedLanguages = ((_h = document.getElementById('edit-languages')) === null || _h === void 0 ? void 0 : _h.value) || '';
                // Re-generate resume display with updated values
                resumeDisplay.innerHTML = "\n                    <h2>Resume</h2>\n                    <p><strong>Name:</strong> ".concat(updatedName, "</p>\n                    <p><strong>Email:</strong> ").concat(updatedEmail, "</p>\n                    <p><strong>Phone Number:</strong> ").concat(updatedPhone, "</p>\n                    <h3>Objective</h3>\n                    <p>").concat(updatedObjective, "</p>\n                    <h3>Education</h3>\n                    <p>").concat(updatedEducation, "</p>\n                    <h3>Experience</h3>\n                    <p>").concat(updatedExperience, "</p>\n                    <h3>Skills</h3>\n                    <p>").concat(updatedSkills, "</p>\n                    <h3>Languages</h3>\n                    <p>").concat(updatedLanguages, "</p>\n                    <button id=\"edit-resume\">Edit</button>\n                ");
                // Re-attach the edit button listener
                (_j = document.getElementById('edit-resume')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', function () {
                    resumeDisplay.innerHTML = generateEditableForm();
                });
            });
        });
    }
    else {
        console.error('Resume display container not found');
    }
});
