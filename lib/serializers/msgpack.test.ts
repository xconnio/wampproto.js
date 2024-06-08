import {MsgPackSerializer} from "./msgpack";
import Hello from "../messages/hello";

describe("msgpack", (): void => {
    let serializer: MsgPackSerializer = new MsgPackSerializer();

    it("serialize", (): void => {
        let hello: Hello = new Hello("realm1", "authid");
        let payload: Uint8Array = serializer.serialize(hello);
        expect(expect(payload) != null).toBeTruthy()

        let msg: Hello = <Hello>serializer.deserialize(payload)
        expect(msg.type() == Hello.TYPE).toBeTruthy()
        expect(msg.realm).toEqual("realm1")
    });
});
