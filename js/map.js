var myRegions = [{
    "region": "Auckland",
},
{
    "region": "Wellington",
},



{

    "region": "WestCoast",
},
{

    "region": "Otago",
},
{
    "region": "Marborough",
   
},


];


$(function () {

    for (i = 0; i < myRegions.length; i++) {

        $("#" + myRegions[i].region) //For all regions with IDs same as above
            .css({
                "fill": "#BCBEC0"
            })
            .data("myRegions", myRegions[i]); //attach the data above
    }

    // on mouse over
    $("path").mouseenter(function (e) {
        var region_data = $(this).data("myRegions");
        // check if the path has data
        if (typeof $(this).data("myRegions") !== "undefined") {
            $(".city").html(region_data.city);
            $(".description").html(region_data.description);
            $(".city_img").attr("src", region_data.city_img);
            $(".img_link").attr("href", region_data.img_link);
            $(this).css({
                "fill": "var(--signyellow)",
                "cursor": "pointer"
            });

            if (region_data.region == "Waikato") {
                $("#waikatoCaro").css({ "display": "block" });
                $(".city_img").css({ "display": "none" });
                $("#otagoCaro").css({ "display": "none" });
            } else if (region_data.region == "Otago") {
                $("#otagoCaro").css({ "display": "block" });
                $(".city_img").css({ "display": "none" });
                $("#waikatoCaro").css({ "display": "none" });
            } else {
                $("#waikatoCaro").css({ "display": "none" });
                $("#otagoCaro").css({ "display": "none" });
                $(".city_img").css({ "display": "block" });
            }
        }

    });

    // on mouse leave
    $("path").mouseleave(function () {
        var region_data = $(this).data("myRegions");
        if (typeof $(this).data("myRegions") !== "undefined") {
            $(this).css({
                "fill": "#BCBEC0"
            });
        }
    });
});

function navScroll() {

    var navbar = $(".navbar");
    var c, currentScrollTop = 0;
    var scrollPos = $(window).scrollTop();
    currentScrollTop = scrollPos;

    // After 70px add background color to make it easier to see
    if (scrollPos > 70) {
        navbar.addClass("scrollDownColor");
    } else {
        navbar.removeClass("scrollDownColor");
    }
}

$(window).scroll(function () {
    navScroll();
});

$(document).ready(function () {
    navScroll();
});

// Redirect to Activities page
$(function () {
    $('.redirect_act').click(function () { //link that is clicked on
        var currentId = $(this).attr('id'); //capture id of clicked item
        window.location = 'activities.html#' + currentId; //load new page
        return false;
    });
});

// Redirect to Events page
$(function () {
    $('.redirect_events').click(function () { //link that is clicked on
        var currentId = $(this).attr('id'); //capture id of clicked item
        window.location = 'events.html#' + currentId; //load new page
        return false;
    });
});


//   $(document).ready(function(){
//     $('[data-toggle="popover"]').popover();   
// });
// $("pop1").popover({trigger:'hover', placement:'bottom', title:'Title!', content:'Content'});



$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
$('svg #Wellington').tooltip({
    title: '<h4 class=popText>Wellington</h4><p class="popP">The Windy City</p>',
    html: true,
    placement: 'bottom',
    container: 'body',
 




});
$('svg #Otago').tooltip({
    title: '<h4 class=popText>Central Otago</h4><p class="popP">Adventure Region of NZ</p>',
    html: true,
    placement: 'bottom',
    container: 'body '
});
$('svg #Marborough').tooltip({
    title: '<h4 class=popText>Marlborough</h4><p class="popP">Sav Blanc Capital of NZ</p>',
    html: true,
    placement: 'bottom',
    container: 'body'
});
$('svg #WestCoast').tooltip({
    title: '<h4 class=popText>West Coast</h4><p class="popP">The Wild West Coast</p>',
    html: true,
    placement: 'bottom',
    container: 'body'
});
$('svg #Auckland').tooltip({
    title: '<h4 class=popText>Auckland</h4><p class="popP">The city of Sails</p>',
    html: true,
    placement: 'top',
    container: 'body'
});

