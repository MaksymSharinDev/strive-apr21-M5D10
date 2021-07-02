import express from 'express'
const router = express.Router();
/*
{
        "Title": "The Lord of the Rings: The Fellowship of the Ring",
        "Year": "2001",
        "imdbID": "tt0120737",  //UNIQUE
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
    }
 */

/*
{
        "_id": "123455", //SERVER GENERATED
        "comment": "A good book but definitely I don't like many parts of the plot", //REQUIRED
        "rate": 3, //REQUIRED, max 5
        "elementId": "5d318e1a8541744830bef139", //REQUIRED = IMDBID
        "createdAt": "2019-08-01T12:46:45.895Z" // SERVER GENERATED
    }

*/
/*
POST Media



GET Media (single) (with reviews)

UPDATE Media

POST Poster to single media

DELETE Media

POST Review to media

DELETE Review of media
 */

//GET Medias (list) (with reviews)
router.get('/', function(req, res) {
    //
    res.sendStatus(400);
    res.send(jsonString);
});

export default router