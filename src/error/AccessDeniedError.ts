import { BaseError } from "./BaseError";
import { ErrorCode } from "./ErrorCode";

export class AccessDeniedError extends BaseError {
    constructor(message: string, moreInfo: string) {
        super(message, ErrorCode.AccessDeniedError, moreInfo);
    }
}
