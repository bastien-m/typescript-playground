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

type keys = keyof GlobalState;

const n: keys = "page";

type CustomPick<T, K extends keyof T> = { [k in K]: T[k] }

type Url = CustomPick<GlobalState, "url">

type Foo = {
    type: 'foo'
}

type Bar = {
    type: 'bar'
}

type Baz = Foo | Bar

const baz: Baz = {
    type: "foo"
}

type FooBazType = Baz['type']


function getSomething(): {phone: string, name: string} {
    return {
        phone: '012345566',
        name: 'foo'
    }
}

// retourne uniquement le type de retour
type SomethingResponse = ReturnType<typeof getSomething>

// Retourne toute la signature
type tt = typeof getSomething