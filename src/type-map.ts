type GlobalState = {
    page: string;
    url: string;
    user: {
        firstname: string;
        lastname: string;
    };
}

type PageInfo = {
    [k in 'page' | 'url']: GlobalState[k]
}

type User = {
    [k in keyof GlobalState['user']]: GlobalState['user'][k]
}