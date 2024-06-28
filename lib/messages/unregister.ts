import Message from "./message";
import ValidationSpec from "./validation-spec";
import {
    validateMessage,
    validateRegistrationID,
    validateRequestID,
} from "./util";

interface IUnRegisterFields {
    readonly requestID: number;
    readonly registrationID: number;
}

class UnRegisterFields implements IUnRegisterFields {
    constructor (private readonly _requestID: number, private readonly _registrationID: number) {}

    get requestID(): number {
        return this._requestID;
    }

    get registrationID(): number {
        return this._registrationID;
    }
}

class UnRegister implements Message {
    static TYPE: number = 66;
    static TEXT: string = "UNREGISTER";

    static VALIDATION_SPEC = new ValidationSpec(
        3,
        3,
        UnRegister.TEXT,
        {1: validateRequestID, 2: validateRegistrationID},
    )

    constructor(private readonly _fields: IUnRegisterFields) {}

    get requestID(): number {
        return this._fields.requestID;
    }

    get registrationID(): number {
        return this._fields.registrationID;
    }

    static parse(msg: any[]): UnRegister {
        const f = validateMessage(msg, UnRegister.TYPE, UnRegister.TEXT, UnRegister.VALIDATION_SPEC)
        return new UnRegister(new UnRegisterFields(f.requestID, f.registrationID));
    }

    marshal(): any[] {
        return [UnRegister.TYPE, this.requestID, this.registrationID];
    }

    type(): number {
        return UnRegister.TYPE;
    }
}

export {UnRegister, UnRegisterFields};
