import {JSONSerializer} from "./json";
import Hello, {HelloFields} from "../messages/hello";

describe("msgpack", (): void => {
    const serializer: JSONSerializer = new JSONSerializer();

    it("serialize", (): void => {
        const hello: Hello = new Hello(new HelloFields("realm1", {"callee": {}}));
        const payload: string = serializer.serialize(hello);
        expect(expect(payload) != null).toBeTruthy()

        const msg: Hello = <Hello>serializer.deserialize(payload)
        expect(msg.type() == Hello.TYPE).toBeTruthy()
        expect(msg.realm).toEqual("realm1")
    });
});
