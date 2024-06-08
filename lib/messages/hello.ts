import Message from "./message";

class Hello implements Message {
    static TYPE: number = 48;
    static TEXT: string = "HELLO";

    constructor(public realm: string, public authID: string) {
        this.realm = realm;
        this.authID = authID;
    }

    parse(msg: any[]): void {
        this.realm = msg[1]
        this.authID = msg[1]
    }

    marshal(): any[] {
        const extra = {
            "authid": this.authID,
            "authmethods": ["anonymous"]
        }

        return [Hello.TYPE, this.realm, extra]
    }

    type(): number {
        return Hello.TYPE;
    }
}

export default Hello;
