import {MsgPackSerializer} from "./msgpack";
import Hello, {HelloFields} from "../messages/hello";

describe("msgpack", (): void => {
    const serializer: MsgPackSerializer = new MsgPackSerializer();

    it("serialize", (): void => {
        let hello: Hello = new Hello(new HelloFields("realm1", {"callee": {}}));
        let payload: Uint8Array = serializer.serialize(hello);
        expect(expect(payload) != null).toBeTruthy()

        const msg: Hello = <Hello>serializer.deserialize(payload)
        expect(msg.type() == Hello.TYPE).toBeTruthy()
        expect(msg.realm).toEqual("realm1")
    });
});
