import Message from "../messages/message";
import {Hello} from "../messages/hello";

interface Serializer {
    serialize(message: Message): Uint8Array | string;

    deserialize(data: Uint8Array | string): Message;
}

function ToMessage(wampMsg: any[]): Message {
    switch (wampMsg[0]) {
        case Hello.TYPE:
            return Hello.parse(wampMsg);
        default:
            throw new Error("unknown message: " + wampMsg[0]);
    }
}

export {
    Serializer,
    ToMessage
}
