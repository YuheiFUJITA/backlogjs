import { BaseError } from "./BaseError";
import { ErrorCode } from "./ErrorCode";

/**
 * プログラムのバグ等に起因する例外などが原因のエラー
 */
export class InternalError extends BaseError {
    /**
     * コンストラクタ
     * @param message エラーメッセージ 
     * @param moreInfo 詳細情報
     */
    constructor(message: string, moreInfo: string) {
        super(message, ErrorCode.InternalError, moreInfo);
    }
}
