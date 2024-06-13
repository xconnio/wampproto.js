import {CBORSerializer} from "./cbor";
import Hello from "../messages/hello";

describe("cbor", (): void => {
    const serializer: CBORSerializer = new CBORSerializer();

    it("serialize", (): void => {
        const hello: Hello = new Hello("realm1", "authid");
        const payload: Uint8Array = serializer.serialize(hello);
        expect(expect(payload) != null).toBeTruthy()

        const msg: Hello = <Hello>serializer.deserialize(payload)
        expect(msg.type() == Hello.TYPE).toBeTruthy()
        expect(msg.realm).toEqual("realm1")
    });
});
