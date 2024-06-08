import { unpack, pack } from 'msgpackr';

import Message from "../messages/message";
import {Serializer, ToMessage} from "./serializer";


class MsgPackSerializer implements Serializer {
    serialize(message: Message): Uint8Array {
        return pack(message.marshal());
    }

    deserialize(data: Uint8Array): Message {
        const wampMsg: any[] = unpack(data);
        return ToMessage(wampMsg)
    }
}

export {
    MsgPackSerializer
}
