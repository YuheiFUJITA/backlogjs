import { BaseError } from "./BaseError";
import { ErrorCode } from "./ErrorCode";

/**
 * ライセンスの期限切れを表すエラー
 */
export class LicenceExpiredError extends BaseError {
    /**
     * コンストラクタ
     * @param message エラーメッセージ 
     * @param moreInfo 詳細情報
     */
    constructor(message: string, moreInfo: string) {
        super(message, ErrorCode.LicenceExpiredError, moreInfo);
    }
}
