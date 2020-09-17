import { BaseError } from "./BaseError";
import { ErrorCode } from "./ErrorCode";

/**
 * 不正なパラメータのリクエストを表すエラー
 */
export class InvalidRequestError extends BaseError {
    /**
     * コンストラクタ
     * @param message エラーメッセージ 
     * @param moreInfo 詳細情報
     */
    constructor(message: string, moreInfo: string) {
        super(message, ErrorCode.InvalidRequestError, moreInfo);
    }
}
