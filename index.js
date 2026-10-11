function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

//Function to return a player's score points
function numPointsScored(playerName) {
    for(const [key, value] of Object.entries(gameObject())) {
        

        if(value.players[playerName]) {
            return value.players[playerName].points;

        }
    }

}

//Function to return shoesize of a player
function shoeSize(playerName) {
    for(const [key, value] of Object.entries(gameObject())) {

        if(value.players[playerName]) {
            return value.players[playerName].shoe;
        }
    }

        
}

//Function to return an array of a team's colors
function teamColors(teamName) {
    const data = gameObject();

    for(const team of Object.values(data)) {

        if(team.teamName === teamName) {
            return team.colors;

        }
    }

}

//Function to return an array of both team names
function teamNames() {
    const data = gameObject();

   return Object.values(data).map(team => team.teamName)
}


//Function to return player numbers

function playerNumbers(teamName) {
    const data = gameObject();

    for(const teamKey in data) {

        if(data[teamKey].teamName === teamName) {
            return Object.values(data[teamKey].players).map(player => player.number);
        }
    }
}


//Function to return an object with all the stats of a player

function playerStats(playerName) {
    const data = gameObject();

    for(const teamKey in data) {
        const team = data[teamKey];

        if(team.players[playerName]) {

            return team.players[playerName];
        }
    }

}

//Function that identifies the player with the largest shoesize and returns their rebounds

function bigShoeRebounds() {
    const data = gameObject();
    const allPlayers = [
        ...Object.values(data.home.players),
        ...Object.values(data.away.players)
    ];
    const biggestShoe = allPlayers.reduce((biggest, player) => player.shoe > biggest.shoe ? player : biggest);
    return biggestShoe.rebounds;

}

 console.log(numPointsScored('Brook Lopez'));
 console.log(shoeSize('Brook Lopez'));
 console.log(teamColors('Brooklyn Nets'));
 console.log(teamNames());
 console.log(playerNumbers('Brooklyn Nets'));
 console.log(playerStats('Brook Lopez'));
 console.log(bigShoeRebounds());
