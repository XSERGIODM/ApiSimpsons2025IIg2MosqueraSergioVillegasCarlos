export interface PersonajeListType {
    next:    string;
    pages:   number;
    count:   number;
    results: PersonajeType[];
}

export interface PersonajeType {
    birthdate:     Date;
    occupation:    string;
    gender:        string;
    name:          string;
    portrait_path: string;
    id:            number;
    phrases:       string[];
    age:           number;
    status:        string;
}
