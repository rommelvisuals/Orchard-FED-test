import css from '../css/styles.css';

Fancybox.bind("[data-fancybox]", {});

$('a').click(function(event) {
    event.preventDefault();
    console.log('Clicked element:', $(this).attr('id'));
});