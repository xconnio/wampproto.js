import Message from "./message";
import ValidationSpec from "./validation-spec";
import {
    validateMessage,
    validateSubscriptionID,
    validateRequestID,
} from "./util";

interface IUnSubscribeFields {
    readonly requestID: number;
    readonly subscriptionID: number;
}

class UnSubscribeFields implements IUnSubscribeFields {
    constructor (private readonly _requestID: number, private readonly _subscriptionID: number) {}

    get requestID(): number {
        return this._requestID;
    }

    get subscriptionID(): number {
        return this._subscriptionID;
    }
}

class UnSubscribe implements Message {
    static TYPE: number = 34;
    static TEXT: string = "UNSUBSCRIBE";

    static VALIDATION_SPEC = new ValidationSpec(
        3,
        3,
        UnSubscribe.TEXT,
        {1: validateRequestID, 2: validateSubscriptionID},
    )

    constructor(private readonly _fields: IUnSubscribeFields) {}

    get requestID(): number {
        return this._fields.requestID;
    }

    get subscriptionID(): number {
        return this._fields.subscriptionID;
    }

    static parse(msg: any[]): UnSubscribe {
        const f = validateMessage(msg, UnSubscribe.TYPE, UnSubscribe.TEXT, UnSubscribe.VALIDATION_SPEC)
        return new UnSubscribe(new UnSubscribeFields(f.requestID, f.subscriptionID));
    }

    marshal(): any[] {
        return [UnSubscribe.TYPE, this.requestID, this.subscriptionID];
    }

    type(): number {
        return UnSubscribe.TYPE;
    }
}
