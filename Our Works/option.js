$(document).ready(function () {
    $('.list').click(function () {
        const value = $(this).attr('data-filter');

        if (value == 'all') {
            $('.all-projects-details').show('1000');
        }
        else {
            $('.all-projects-details').not('.' +value).hide('1000');
            $('.all-projects-details').filter('.' +value).show('1000');
        }
    })

    $('.list').click(function () {
        $(this).addClass('active-btn').siblings().removeClass('active-btn');
    })
});