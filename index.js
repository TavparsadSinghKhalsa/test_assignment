// === Theme Toggle Script ===
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Apply saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-bs-theme', savedTheme);
        themeToggle.checked = savedTheme === 'light';
    } else {
        // Optional: Use system preference if no saved theme
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        htmlElement.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
        themeToggle.checked = !prefersDark;
    }

    // Toggle theme when switch is clicked
    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'light' : 'dark';
        htmlElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
