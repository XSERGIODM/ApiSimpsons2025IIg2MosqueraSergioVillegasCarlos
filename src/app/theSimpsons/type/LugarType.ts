export interface LugarListType {
    next:    string;
    pages:   number;
    count:   number;
    results: LugarType[];
}

export interface LugarType {
    town:       string;
    image_path: string;
    use:        string;
    name:       string;
    id:         number;
}
