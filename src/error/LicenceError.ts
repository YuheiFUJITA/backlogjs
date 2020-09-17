import { BaseError } from "./BaseError";
import { ErrorCode } from "./ErrorCode";

/**
 * 使用しているライセンス(プラン)で使用できない機能が呼び出された場合のエラー
 */
export class LicenceError extends BaseError {
    /**
     * コンストラクタ
     * @param message エラーメッセージ 
     * @param moreInfo 詳細情報
     */
    constructor(message: string, moreInfo: string) {
        super(message, ErrorCode.LicenceError, moreInfo);
    }
}
