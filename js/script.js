// Import the CSS file
import css from '../css/styles.css';

// Initialize Fancybox
Fancybox.bind("[data-fancybox]", {});

// Event listener for anchor tags
$('a').click(function(event) {
    console.log('Clicked element:', $(this).attr('id')); // Log the ID of the clicked anchor
});