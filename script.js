window.onload = function() {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.transition = 'none'; // Disable transition initially
        skill.style.width = '0%'; // Start from 0%
        setTimeout((a) => {
            skill.style.transition = 'width 10s ease-in-out'; // Re-enable transition
            skill.style.width = width; // Set to final width
        }, 200);
    });
};