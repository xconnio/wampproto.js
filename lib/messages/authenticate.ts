import Message from "./message";

class Authenticate implements Message {
    _signature: string;

    constructor(private readonly signature: string) {
        this._signature = signature;
    }

    marshal(): any[] {
        return [];
    }

    parse(msg: any[]) {
    }

    type(): number {
        return 0;
    }
}

export default Authenticate;
