import Message from "./message";
import ValidationSpec from "./validation-spec";
import {
    validateMessage,
    validateRequestID,
} from "./util";

interface IUnSubscribedFields {
    readonly requestID: number;
}

class UnSubscribedFields implements IUnSubscribedFields {
    constructor (private readonly _requestID: number) {}

    get requestID(): number {
        return this._requestID;
    }
}

class UnSubscribed implements Message {
    static TYPE: number = 35;
    static TEXT: string = "UNSUBSCRIBED";

    static VALIDATION_SPEC = new ValidationSpec(
        2,
        2,
        UnSubscribed.TEXT,
        {1: validateRequestID},
    )

    constructor(private readonly _fields: IUnSubscribedFields) {}

    get requestID(): number {
        return this._fields.requestID;
    }

    static parse(msg: any[]): UnSubscribed {
        const f = validateMessage(msg, UnSubscribed.TYPE, UnSubscribed.TEXT, UnSubscribed.VALIDATION_SPEC)
        return new UnSubscribed(new UnSubscribedFields(f.requestID));
    }

    marshal(): any[] {
        return [UnSubscribed.TYPE, this.requestID];
    }

    type(): number {
        return UnSubscribed.TYPE;
    }
}

export {UnSubscribed, UnSubscribedFields};
