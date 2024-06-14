class ValidationSpec {
    public readonly minLength: number;
    public readonly maxLength: number;
    public readonly message: string;
    public readonly spec: {[key:number]: CallableFunction};
    public constructor(minLength: number, maxLength: number, message: string, spec: {[key:number]: CallableFunction}) {
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.message = message;
        this.spec = spec;
    }
}

export default ValidationSpec;
