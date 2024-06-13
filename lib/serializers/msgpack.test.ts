import {MsgPackSerializer} from "./msgpack";
import Hello from "../messages/hello";

describe("msgpack", (): void => {
    const serializer: MsgPackSerializer = new MsgPackSerializer();

    it("serialize", (): void => {
        const hello: Hello = new Hello("realm1", "authid");
        const payload: Uint8Array = serializer.serialize(hello);
        expect(expect(payload) != null).toBeTruthy()

        const msg: Hello = <Hello>serializer.deserialize(payload)
        expect(msg.type() == Hello.TYPE).toBeTruthy()
        expect(msg.realm).toEqual("realm1")
    });
});
