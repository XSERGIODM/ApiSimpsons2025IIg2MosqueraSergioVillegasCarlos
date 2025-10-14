
export interface EpisodiosListType {
    next:    string;
    pages:   number;
    count:   number;
    results: EpisodiosType[];
}

export interface EpisodiosType {
    episode_number: number;
    airdate:        Date;
    image_path:     string;
    name:           string;
    season:         number;
    id:             number;
    synopsis:       string;
}
