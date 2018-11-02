var app = {};
app.show = function() {
    console.log('hello world');
}

app.updateContent =  function(el, msg) {
    return function() {
        var majorHeading = document.getElementById(el);
        majorHeading.innerHTML =  msg;
    }
}

app.init = function() {
    var headBtn = document.getElementById('showHeading');
    var majorHeading = document.getElementById('majHeading');
    var subHeadingBtn = document.getElementById('showSubHeading');
    console.log(app.updateContent('javascript'));
    headBtn.addEventListener('click', app.updateContent('majHeading', 'javascript'));
    subHeadingBtn.addEventListener('click', app.updateContent('minorHeading', 'VDSI-Hyderabad'));
}

app.show();
app.init();  