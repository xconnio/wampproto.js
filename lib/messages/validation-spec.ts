class ValidationSpec {
    readonly minLength: number;
    readonly maxLength: number;
    readonly message: string;
    readonly spec: {[key:number]: CallableFunction};
    public constructor(minLength: number, maxLength: number, message: string, spec: {[key:number]: CallableFunction}) {
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.message = message;
        this.spec = spec;
    }
}

export default ValidationSpec;
