import { BaseError } from "./BaseError";
import { ErrorCode } from "./ErrorCode";

/**
 * 認証に失敗した場合のエラー
 */
export class AuthenticationError extends BaseError {
    /**
     * コンストラクタ
     * @param message エラーメッセージ 
     * @param moreInfo 詳細情報
     */
    constructor(message: string, moreInfo: string) {
        super(message, ErrorCode.AuthenticationError, moreInfo);
    }
}
