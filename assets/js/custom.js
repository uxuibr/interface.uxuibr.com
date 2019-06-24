var apiEndpoint = "https://uxuibr.prismic.io/api/v2/documents/search?ref=XBz4CRAAAC0AsS2l&pageSize=100#format=json";
var request = new XMLHttpRequest();

request.open('GET', apiEndpoint, true);
request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(this.response);
    var members = [];
    for(var i in data.results){ 
        var member_img = data.results[i].data.photo.url;
        members.push(member_img);
    }
    shuffle(members);
    renderMembers(members);
  } else {
    //console.log('error')  Carregar json offline
  }
}
request.send();

function renderMembers(members){
    var html ='';
    for(var i = 0; i < 12; i++){
        html +='<div class="member-thumb"><img src="'+members[i]+'" /></div>'
    }
    document.getElementById('members').innerHTML = html;
}
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

$(function() {
  $('.menu a').click(function(){
    const target = $(this).attr('href');
    const scrollPos = $(target).position();
    const scollTopPos = scrollPos.top - 112;
    const body = $("html, body");
    body.stop().animate({scrollTop:scollTopPos}, 500);
    return false;
  });
});