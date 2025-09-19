export class ErrorBadRequest extends Error {
    constructor(msg: string) {
        super(msg)
        Object.setPrototypeOf(this, ErrorBadRequest.prototype)
    }
}