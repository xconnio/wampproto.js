import Message from "./message";

class Authenticate implements Message {
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
