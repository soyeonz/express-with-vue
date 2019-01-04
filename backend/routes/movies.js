var express = require('express');
var router = express.Router();
var movies = require('../movies.json');

// 전체 영화 목록을 가져오는 API
router.get('/', function(req, res, next){
    res.send(movies);
});

// ID와 일치하는 영화를 가져오는 API
// movies를 다 도는데, movie는 movies[0], movies[1], movies[2] … 이런식의 각각의 값. 
// 그리고 이 function(movie) 는 Boolean을 리턴하는데 true이면 그 값이 최종적으로 return 되는 배열에 포함되고 false일 경우에는 제외된다. 
// 여기서 id는 unique한 값이므로, 결과는 1개만 리턴될 것이다. 아예 없으면. 뭐..
router.get('/:id', function(req,res,next){
    var id = parseInt(req.params.id, 10);
    var movie = movies.filter(function(movie){
        return movie.id === id
    });
    res.send(movie)
});

// express.Router()가 리턴한 객체에 일부 프로퍼티를 수정한뒤, 이 객체 자체를 모듈로 리턴한 것이다. 
module.exports = router;