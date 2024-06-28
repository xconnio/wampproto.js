export class ProtocolError extends Error {
    constructor(public message: string) {
        super(message);
    }
}

export class SessionNotReady extends Error {
    constructor(public message: string) {
        super(message);
    }
}
