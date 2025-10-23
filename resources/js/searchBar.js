console.log('Search bar script loaded');

const toggleButton = document.getElementById('toggleSearch');
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('search');
let searchVisible = false; // Start with a clear state

toggleButton.addEventListener('click', (e) => {
  // If the button's job is to open the search bar (not submit)
  if (toggleButton.type === 'button') {
    e.preventDefault(); // Prevent any default action
    e.stopPropagation(); // Stop this click from triggering the 'document' listener

    // Show search input
    searchVisible = true;
    toggleButton.type = 'submit';
    toggleButton.classList.add('text-gray-900');
    toggleButton.classList.remove('text-gray-50');

    searchInput.disabled = false;
    searchInput.classList.remove('w-0', 'opacity-0');
    searchInput.classList.add('w-52', 'opacity-100');
    searchInput.focus();
  }
  // If the button's type is already 'submit', this listener does nothing,
  // allowing the default form submission to happen naturally.
});

// This listener remains the same, to hide the bar when clicking away
document.addEventListener('click', (e) => {
  if (!searchForm.contains(e.target) && searchVisible) {
    // Hide search input
    searchVisible = false;
    toggleButton.type = 'button';
    toggleButton.classList.remove('text-gray-900');
    toggleButton.classList.add('text-gray-50');

    searchInput.disabled = true;
    searchInput.classList.add('w-0', 'opacity-0');
    searchInput.classList.remove('w-52', 'opacity-100');
  }
});