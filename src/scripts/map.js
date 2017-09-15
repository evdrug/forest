var map;





initMap();
function initMap() {

    var pos = {lat: 59.937763, lng: 30.218649};
    var pos1 = {lat: 59.937220, lng: 30.224896};
    var marker_url = "/images/map-marker.png";
    var popupContent = '<p class="content">Что угодно</p>';

    var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#87a87b"},{"visibility":"on"}]}]


    map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 16,
        disableDefaultUI: true,
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: pos1,
        map: map,
        icon: marker_url,
        animation: google.maps.Animation.BOUNCE
    });

    map.setOptions({styles: styles});
}