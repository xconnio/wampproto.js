import {JSONSerializer} from "./json";
import Hello from "../messages/hello";

describe("msgpack", (): void => {
    let serializer: JSONSerializer = new JSONSerializer();

    it("serialize", (): void => {
        let hello: Hello = new Hello("realm1", "authid");
        let payload: string = serializer.serialize(hello);
        expect(expect(payload) != null).toBeTruthy()

        let msg: Hello = <Hello>serializer.deserialize(payload)
        expect(msg.type() == Hello.TYPE).toBeTruthy()
        expect(msg.realm).toEqual("realm1")
    });
});
