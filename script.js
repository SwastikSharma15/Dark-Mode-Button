function toggleButton(btn) {
    btn.classList.toggle('night');
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    
    // Save theme preference
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}