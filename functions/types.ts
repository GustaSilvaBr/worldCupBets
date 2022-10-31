interface Team{
    name: string
}

interface Group{
    jokerTeamA: undefined,
    jokerTeamB: undefined,
    name: string,
    pointsToMultiply: number;
}

interface Match{
    date: Date,
    group: Group,
    pointsToAdd: {
        matchScore: number,
        matchWinner: number
    },
    teamA:{
        score:number,
        team:Team
    },
    TeamB: {
        score: number,
        team: Team
    }
}

export {Team, Group, Match};