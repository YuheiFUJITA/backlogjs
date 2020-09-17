import { BaseError } from "./BaseError";
import { ErrorCode } from "./ErrorCode";

/**
 * 2段階認証を有効にしていないユーザーが、2段階認証が必須なスペースへのアクセスを拒否された場合のエラー
 */
export class RequiredMFAError extends BaseError {
    /**
     * コンストラクタ
     * @param message エラーメッセージ 
     * @param moreInfo 詳細情報
     */
    constructor(message: string, moreInfo: string) {
        super(message, ErrorCode.RequiredMFAError, moreInfo);
    }
}
