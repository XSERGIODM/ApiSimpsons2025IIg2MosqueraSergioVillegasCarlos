// YApi QuickType插件生成，具体参考文档:https://plugins.jetbrains.com/plugin/18847-yapi-quicktype/documentation

export interface PersonajeType {
    next:    string;
    pages:   number;
    count:   number;
    results: Result[];
}

export interface Result {
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
