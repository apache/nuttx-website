console.log('=== THEME DEBUG START ===');

// Function to toggle theme
function toggleTheme() {
  console.log('=== TOGGLE THEME CALLED ===');
  
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  console.log('Current theme attribute:', current);
  
  const newTheme = current === 'dark' ? 'light' : 'dark';
  console.log('New theme will be:', newTheme);
  
  // Set the theme
  html.setAttribute('data-theme', newTheme);
  console.log('Theme attribute set to:', html.getAttribute('data-theme'));
  
  // Save to localStorage
  localStorage.setItem('theme', newTheme);
  console.log('Saved to localStorage:', localStorage.getItem('theme'));
  
  // Test if CSS variables are working
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim();
  console.log('CSS variable --bg-primary:', bgColor);
  
  return false;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== DOM READY ===');
  
  // Find the toggle button
  const toggleBtn = document.getElementById('themeToggle');
  console.log('Toggle button found:', toggleBtn);
  
  if (toggleBtn) {
    // Add click event
    toggleBtn.addEventListener('click', function(e) {
      console.log('=== CLICK EVENT FIRED ===');
      e.preventDefault();
      e.stopPropagation();
      toggleTheme();
      return false;
    });
    
    console.log('Click event listener added successfully');
  } else {
    console.error('ERROR: Toggle button not found!');
  }
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  console.log('Saved theme from localStorage:', savedTheme);
  
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    console.log('Applied saved theme, current attribute:', document.documentElement.getAttribute('data-theme'));
  } else {
    console.log('No saved theme, using default (light)');
    document.documentElement.setAttribute('data-theme', 'light');
  }
  
  // Test CSS variables
  console.log('Testing CSS variables:');
  console.log('--bg-primary:', getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim());
  console.log('--text-primary:', getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim());
  
  console.log('=== THEME DEBUG END ===');
});

// Fallback click handler
document.addEventListener('click', function(e) {
  if (e.target.closest('#themeToggle')) {
    console.log('Fallback click handler triggered');
    e.preventDefault();
    toggleTheme();
  }
});
