import { BaseError } from "./BaseError";
import { ErrorCode } from "./ErrorCode";

/**
 * リソースを追加する操作が呼び出された時に、そのリソースに設けられた制限を超える場合のエラー
 */
export class ResourceOverflowError extends BaseError {
    /**
     * コンストラクタ
     * @param message エラーメッセージ 
     * @param moreInfo 詳細情報
     */
    constructor(message: string, moreInfo: string) {
        super(message, ErrorCode.ResourceOverflowError, moreInfo);
    }
}
