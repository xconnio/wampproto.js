import Message from "./message";
import ValidationSpec from "./validation-spec";
import {validateDetails, validateMessage, validateReason} from "./util";

interface IAbortFields {
    readonly details: { [key: string]: any };
    readonly reason: string;
}

class AbortFields implements IAbortFields {
    constructor (private readonly _details: { [key: string]: any }, private readonly _reason: string) {}

    get details(): { [key: string]: any } {
        return this._details;
    }

    get reason(): string {
        return this._reason;
    }
}

class Abort implements Message {
    static TYPE: number = 3;
    static TEXT: string = "ABORT";

    static VALIDATION_SPEC = new ValidationSpec(
        3,
        3,
        Abort.TEXT,
        {1: validateDetails, 2: validateReason},
    )

    constructor(private readonly _fields: IAbortFields) {}

    get details(): { [key: string]: any } {
        return this._fields.details;
    }

    get reason(): string {
        return this._fields.reason;
    }

    static parse(msg: any[]): Abort {
        const f = validateMessage(msg, Abort.TYPE, Abort.TEXT, Abort.VALIDATION_SPEC)
        return new Abort(new AbortFields(f.details, f.reason));
    }

    marshal(): any[] {
        return [Abort.TYPE, this.details, this.reason];
    }

    type(): number {
        return Abort.TYPE;
    }
}

export {Abort, AbortFields};
