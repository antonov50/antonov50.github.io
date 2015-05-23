$(function() {
    //Set up instafeed
    var feed = new Instafeed({
        //get: 'user',
        //userId: 2132112035,
        //accessToken: '2132112035.467ede5.7d7ce41064594c2da116126863a9cbbe'
        clientId: 'd4873c7237c242fc9c278d206a058a81',
        get: 'tagged',
        tagName: 'antonov50',
        sortBy: 'most-recent',
        limit: 8,
        links: true,
        resolution: 'standard_resolution',
        target: 'instafeed',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}</div></div></div>'
    });
    feed.run();

});