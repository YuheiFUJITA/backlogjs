import { BaseError } from "./BaseError";
import { ErrorCode } from "./ErrorCode";

/**
 * リクエスト対象のリソースが存在しない場合のエラー
 */
export class NoResourceError extends BaseError {
    /**
     * コンストラクタ
     * @param message エラーメッセージ 
     * @param moreInfo 詳細情報
     */
    constructor(message: string, moreInfo: string) {
        super(message, ErrorCode.NoResourceError, moreInfo);
    }
}
