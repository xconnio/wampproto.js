
interface Message {
    parse(msg: any[]);
    marshal(): any[];
    type(): number
}

export default Message;
