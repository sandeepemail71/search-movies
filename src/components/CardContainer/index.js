import React from 'react';
import Card from "./Card";

import './index.css';

export default function CardContainer({ data, title }) {
    return (
        <div>
            <div className='title-text' >{title}</div>
            <div className='cards'>
                {data.map(ele => {
                    return (
                        <Card {...ele} />
                    );
                })}
            </div>
        </div>
    )
}





const mockData = [
    {
        "vote_average": 7.4,
        "overview": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        "release_date": "2020-08-22",
        "title": "Tenet",
        "adult": false,
        "backdrop_path": "/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
        "genre_ids": [
            28,
            53,
            878
        ],
        "vote_count": 3185,
        "original_language": "en",
        "original_title": "Tenet",
        "poster_path": "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
        "id": 577922,
        "video": false,
        "popularity": 1498.768,
        "media_type": "movie"
    },
    {
        "original_language": "en",
        "original_title": "The Croods: A New Age",
        "poster_path": "/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg",
        "video": false,
        "vote_average": 8.1,
        "overview": "After leaving their cave, the Croods encounter their biggest threat since leaving: another family called the Bettermans, who claim and show to be better and evolved. Grug grows suspicious of the Betterman parents, Phil and Hope,  as they secretly plan to break up his daughter Eep with her loving boyfriend Guy to ensure that their daughter Dawn has a loving and smart partner to protect her.  Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",
        "release_date": "2020-11-25",
        "vote_count": 567,
        "title": "The Croods: A New Age",
        "adult": false,
        "backdrop_path": "/cjaOSjsjV6cl3uXdJqimktT880L.jpg",
        "id": 529203,
        "genre_ids": [
            12,
            14,
            10751,
            16
        ],
        "popularity": 2401.216,
        "media_type": "movie"
    },
    {
        "adult": false,
        "backdrop_path": "/dueiWzWc81UAgnbDAyH4Gjqnh4n.jpg",
        "genre_ids": [
            18,
            878
        ],
        "id": 614911,
        "original_language": "en",
        "original_title": "The Midnight Sky",
        "overview": "A lone scientist in the Arctic races to contact a crew of astronauts returning home to a mysterious global catastrophe.",
        "poster_path": "/51JxCk77ZCqLzbLkrDl9Qho6KUh.jpg",
        "release_date": "2020-12-10",
        "title": "The Midnight Sky",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 112,
        "popularity": 119.472,
        "media_type": "movie"
    },
    {
        "vote_average": 7.2,
        "overview": "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
        "release_date": "2020-12-16",
        "adult": false,
        "backdrop_path": "/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
        "vote_count": 136,
        "genre_ids": [
            14,
            28,
            12
        ],
        "title": "Wonder Woman 1984",
        "original_language": "en",
        "original_title": "Wonder Woman 1984",
        "poster_path": "/lNVHB85FUDZqLzvug3k6FA07RIr.jpg",
        "id": 464052,
        "video": false,
        "popularity": 903.158,
        "media_type": "movie"
    },
    {
        "adult": false,
        "backdrop_path": "/tYkMtYPNpUdLdzGDUTC5atyMh9X.jpg",
        "vote_count": 266,
        "title": "Honest Thief",
        "genre_ids": [
            28,
            53,
            80,
            18
        ],
        "video": false,
        "original_language": "en",
        "original_title": "Honest Thief",
        "poster_path": "/zeD4PabP6099gpE0STWJrJrCBCs.jpg",
        "id": 553604,
        "release_date": "2020-09-03",
        "vote_average": 7.0,
        "overview": "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.",
        "popularity": 1877.442,
        "media_type": "movie"
    },
    {
        "vote_average": 7.1,
        "overview": "John Garrity, his estranged wife and their young son embark on a perilous journey to find sanctuary as a planet-killing comet hurtles toward Earth. Amid terrifying accounts of cities getting levelled, the Garrity's experience the best and worst in humanity. As the countdown to the global apocalypse approaches zero, their incredible trek culminates in a desperate and last-minute flight to a possible safe haven.",
        "release_date": "2020-07-29",
        "adult": false,
        "backdrop_path": "/2Fk3AB8E9dYIBc2ywJkxk8BTyhc.jpg",
        "vote_count": 1062,
        "genre_ids": [
            28,
            53
        ],
        "title": "Greenland",
        "original_language": "en",
        "original_title": "Greenland",
        "poster_path": "/bNo2mcvSwIvnx8K6y1euAc1TLVq.jpg",
        "id": 524047,
        "video": false,
        "popularity": 1091.389,
        "media_type": "movie"
    },
    {
        "adult": false,
        "backdrop_path": "/ckfwfLkl0CkafTasoRw5FILhZAS.jpg",
        "genre_ids": [
            28,
            35,
            14
        ],
        "id": 602211,
        "original_language": "en",
        "original_title": "Fatman",
        "overview": "A rowdy, unorthodox Santa Claus is fighting to save his declining business. Meanwhile, Billy, a neglected and precocious 12 year old, hires a hit man to kill Santa after receiving a lump of coal in his stocking.",
        "poster_path": "/4n8QNNdk4BOX9Dslfbz5Dy6j1HK.jpg",
        "release_date": "2020-11-13",
        "title": "Fatman",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 223,
        "popularity": 958.301,
        "media_type": "movie"
    },
    {
        "vote_average": 6.9,
        "overview": "Tensions rise when the trailblazing Mother of the Blues and her band gather at a Chicago recording studio in 1927. Adapted from August Wilson's play.",
        "release_date": "2020-11-25",
        "adult": false,
        "backdrop_path": "/9UFwcWa3lKeAllcW0EvkmOuHqek.jpg",
        "vote_count": 99,
        "genre_ids": [
            18,
            10402
        ],
        "title": "Ma Rainey's Black Bottom",
        "original_language": "en",
        "original_title": "Ma Rainey's Black Bottom",
        "poster_path": "/pvtyxijaBrCSbByXLcUIDDSvc40.jpg",
        "id": 615667,
        "video": false,
        "popularity": 132.692,
        "media_type": "movie"
    },
    {
        "adult": false,
        "id": 611213,
        "genre_ids": [
            35,
            10402,
            10749
        ],
        "vote_count": 207,
        "original_language": "en",
        "original_title": "The Prom",
        "poster_path": "/i7An8UravfzqaU7SuumaWEVRqVU.jpg",
        "title": "The Prom",
        "video": false,
        "vote_average": 6.7,
        "backdrop_path": "/mqIl9E9jj3WCoqpN2Q5vG7fBQ1p.jpg",
        "overview": "After the PTA of a conservative high school in Indiana bans same-sex couples from attending the annual prom, a gang of flamboyant Broadway stars try to boost their image by showing up to support two lesbian students.",
        "release_date": "2020-12-02",
        "popularity": 42.397,
        "media_type": "movie"
    },
    {
        "vote_average": 7.5,
        "overview": "When a virus threatens to turn the now earth-dwelling friendly alien hybrids against humans, Captain Rose Corley must lead a team of elite mercenaries on a mission to the alien world in order to save what's left of humanity.",
        "release_date": "2020-12-18",
        "adult": false,
        "backdrop_path": "/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg",
        "vote_count": 15,
        "genre_ids": [
            878,
            28
        ],
        "title": "Skylines",
        "original_language": "en",
        "original_title": "Skylines",
        "poster_path": "/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg",
        "id": 560144,
        "video": false,
        "popularity": 74.481,
        "media_type": "movie"
    },
    {
        "adult": false,
        "backdrop_path": "/2AFZyra0Ddwl2oBDhClvD1qSIL6.jpg",
        "id": 340102,
        "genre_ids": [
            28,
            27,
            878
        ],
        "original_language": "en",
        "original_title": "The New Mutants",
        "poster_path": "/xrI4EnZWftpo1B7tTvlMUXVOikd.jpg",
        "title": "The New Mutants",
        "video": false,
        "vote_average": 6.4,
        "overview": "Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.",
        "release_date": "2020-08-26",
        "vote_count": 1148,
        "popularity": 309.732,
        "media_type": "movie"
    },
    {
        "adult": false,
        "backdrop_path": "/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg",
        "genre_ids": [
            28,
            878
        ],
        "original_language": "en",
        "original_title": "Breach",
        "poster_path": "/13B6onhL6FzSN2KaNeQeMML05pS.jpg",
        "vote_count": 20,
        "title": "Breach",
        "vote_average": 4.9,
        "video": false,
        "overview": "A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.",
        "release_date": "2020-12-17",
        "id": 651571,
        "popularity": 67.98,
        "media_type": "movie"
    },
    {
        "genre_ids": [
            12,
            14,
            28
        ],
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Fellowship of the Ring",
        "poster_path": "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 18221,
        "overview": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
        "release_date": "2001-12-18",
        "id": 120,
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "adult": false,
        "backdrop_path": "/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg",
        "popularity": 115.456,
        "media_type": "movie"
    },
    {
        "genre_ids": [
            14,
            10751,
            12,
            35,
            27
        ],
        "original_language": "en",
        "original_title": "Roald Dahl's The Witches",
        "poster_path": "/betExZlgK0l7CZ9CsCBVcwO1OjL.jpg",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 962,
        "overview": "In late 1967, a young orphaned boy goes to live with his loving grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world's Grand High Witch has gathered.",
        "release_date": "2020-10-26",
        "id": 531219,
        "title": "Roald Dahl's The Witches",
        "adult": false,
        "backdrop_path": "/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg",
        "popularity": 505.66,
        "media_type": "movie"
    },
    {
        "vote_average": 7.1,
        "overview": "A young and unskilled fairy godmother that ventures out on her own to prove her worth by tracking down a young girl whose request for help was ignored. What she discovers is that the girl has now become a grown woman in need of something very different than a \"prince charming.\"",
        "release_date": "2020-12-04",
        "title": "Godmothered",
        "adult": false,
        "backdrop_path": "/2ltadt0HtHS8qD3xREVds3PDxkP.jpg",
        "genre_ids": [
            10751,
            14,
            35
        ],
        "vote_count": 214,
        "original_language": "en",
        "original_title": "Godmothered",
        "poster_path": "/j2gx2kwDPLJ2EnVhRnOgViwsVz1.jpg",
        "id": 662546,
        "video": false,
        "popularity": 344.802,
        "media_type": "movie"
    },
    {
        "overview": "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        "release_date": "2020-09-04",
        "id": 337401,
        "adult": false,
        "backdrop_path": "/qAKvUu2FSaDlnqznY4VOp5PmjIF.jpg",
        "genre_ids": [
            28,
            12,
            18,
            14
        ],
        "vote_count": 3606,
        "original_language": "en",
        "original_title": "Mulan",
        "poster_path": "/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "video": false,
        "title": "Mulan",
        "vote_average": 7.1,
        "popularity": 401.926,
        "media_type": "movie"
    },
    {
        "original_language": "en",
        "original_title": "The Christmas Chronicles: Part Two",
        "poster_path": "/6sG0kbEvAi3RRLcGGU5h8l3qAPa.jpg",
        "video": false,
        "vote_average": 6.7,
        "overview": "Kate Pierce is reluctantly spending Christmas with her mom’s new boyfriend and his son Jack. But when the North Pole and Christmas are threatened to be destroyed, Kate and Jack are unexpectedly pulled into a new adventure with Santa Claus.",
        "release_date": "2020-11-18",
        "vote_count": 393,
        "title": "The Christmas Chronicles: Part Two",
        "adult": false,
        "backdrop_path": "/7TC0Me75kIHNhB8O7O6quSI207p.jpg",
        "id": 654028,
        "genre_ids": [
            10751,
            14,
            12
        ],
        "popularity": 402.694,
        "media_type": "movie"
    },
    {
        "adult": false,
        "id": 580175,
        "genre_ids": [
            18,
            35
        ],
        "vote_count": 123,
        "original_language": "da",
        "original_title": "Druk",
        "poster_path": "/aDcIt4NHURLKnAEu7gow51Yd00Q.jpg",
        "title": "Another Round",
        "video": false,
        "vote_average": 8.0,
        "backdrop_path": "/3El9bWuGsaYwFu2TIksMdjgkPbR.jpg",
        "overview": "Four high school teachers launch a drinking experiment: upholding a constant low level of intoxication.",
        "release_date": "2020-09-24",
        "popularity": 64.133,
        "media_type": "movie"
    },
    {
        "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        "release_date": "2019-04-24",
        "id": 299534,
        "adult": false,
        "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        "genre_ids": [
            12,
            878,
            28
        ],
        "vote_count": 16032,
        "original_language": "en",
        "original_title": "Avengers: Endgame",
        "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        "video": false,
        "title": "Avengers: Endgame",
        "vote_average": 8.3,
        "popularity": 150.538,
        "media_type": "movie"
    },
    {
        "poster_path": "/1hdm3Axw9LjITbApvAXBbqO58zE.jpg",
        "video": false,
        "vote_average": 7.4,
        "overview": "In the midst of trying to legitimize his business dealings in 1979 New York and Italy, aging mafia don, Michael Corleone seeks forgiveness for his sins while taking a young protege under his wing.",
        "release_date": "1990-12-25",
        "vote_count": 4033,
        "adult": false,
        "backdrop_path": "/sEp4vZOXFZCf1GfVL0CabcMHOnY.jpg",
        "id": 242,
        "genre_ids": [
            80,
            18,
            53
        ],
        "title": "The Godfather: Part III",
        "original_language": "en",
        "original_title": "The Godfather: Part III",
        "popularity": 45.031,
        "media_type": "movie"
    }
];