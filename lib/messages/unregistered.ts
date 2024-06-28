import Message from "./message";
import ValidationSpec from "./validation-spec";
import {
    validateMessage,
    validateRequestID,
} from "./util";

interface IUnRegisteredFields {
    readonly requestID: number;
}

class UnRegisteredFields implements IUnRegisteredFields {
    constructor (private readonly _requestID: number) {}

    get requestID(): number {
        return this._requestID;
    }
}

class UnRegistered implements Message {
    static TYPE: number = 67;
    static TEXT: string = "UNREGISTERED";

    static VALIDATION_SPEC = new ValidationSpec(
        2,
        2,
        UnRegistered.TEXT,
        {1: validateRequestID},
    )

    constructor(private readonly _fields: IUnRegisteredFields) {}

    get requestID(): number {
        return this._fields.requestID;
    }

    static parse(msg: any[]): UnRegistered {
        const f = validateMessage(msg, UnRegistered.TYPE, UnRegistered.TEXT, UnRegistered.VALIDATION_SPEC)
        return new UnRegistered(new UnRegisteredFields(f.requestID));
    }

    marshal(): any[] {
        return [UnRegistered.TYPE, this.requestID];
    }

    type(): number {
        return UnRegistered.TYPE;
    }
}

export {UnRegistered, UnRegisteredFields};
