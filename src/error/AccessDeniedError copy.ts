import { BaseError } from "./BaseError";
import { ErrorCode } from "./ErrorCode";

/**
 * IP アドレス制限などでアクセスが拒否された場合のエラー
 */
export class UnauthorizedOperationError extends BaseError {
    /**
     * コンストラクタ
     * @param message エラーメッセージ 
     * @param moreInfo 詳細情報
     */
    constructor(message: string, moreInfo: string) {
        super(message, ErrorCode.UnauthorizedOperationError, moreInfo);
    }
}
