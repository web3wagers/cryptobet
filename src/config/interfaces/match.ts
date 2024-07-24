export interface Match {
  matches: MatchElement[];
}

export interface MatchElement {
  idEvent: string;
  strEvent: string;
  strEventAlternate: string;
  strFilename: string;
  strSport: string;
  strHomeTeam: string;
  strAwayTeam: string;
  idHomeTeam: string;
  idAwayTeam: string;
  intRound: string;
  intHomeScore: string;
  intAwayScore: string;
  strTimestamp: string;
  dateEvent: string;
  dateEventLocal: string;
  strTime: string;
  strTimeLocal: string;
  strHomeTeamBadge: string;
  strAwayTeamBadge: string;
  idVenue: null;
  strCountry: string;
  strThumb: string;
  strPoster: string;
  strSquare: string;
  strFanart: null;
  strBanner: string;
  strVideo: string;
}
