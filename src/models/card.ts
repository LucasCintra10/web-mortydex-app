interface Origin {
    name: string;
    url: string;
}

export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
    origin: Origin;
}