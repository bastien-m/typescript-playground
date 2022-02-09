type Person<T> = {
    firstname: string;
    personalData: T[]
}

type PersonalData = {
    key: number;
    value: any;
}


function retrievePerson<T extends PersonalData>() {
    
}


