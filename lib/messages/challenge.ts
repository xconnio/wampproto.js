import Message from "./message";

class Challenge implements Message {
    marshal(): any[] {
        return [];
    }

    parse(msg: any[]) {
    }

    type(): number {
        return 0;
    }
}

export default Challenge;
