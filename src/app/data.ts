export class Data{
    id!: string;
    title!: string;
    content_description!: string;
    content_rating!: string;
    h1_title!: string;
    media!: Media[];
    itemurl!: string;
    url!: string;
    tags!: string[];
    flags!: string[];
}

export class Media{ 
    nanowebm!: {};
    tinywebm!: {};
    nanomp4!: {};
    tinymp4!: {};
    gif!: {
        "size": number;
        "url": string;
        "preview": string;
        };
    nanogif!: {};
    tinygif!: {
        "size": number;
        "url": string;
        "preview": string;
    };
    loopedmp4!: {};
    webm!: {};
    mp4!: {};
    mediumgif!: {};     
}
export class DataResponse{
    results!: Data[]
}