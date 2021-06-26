export interface Customer{
    id: string;
    name: string;
    age: string;
    gender: string;
    address: Address;
    orders: Order[]
}

export interface Address{
    street: string
    postcode: string;
    houseNumber: number;
}

export interface Order{
    oderId: string;
    oderDate: string;
    amount: string;
}