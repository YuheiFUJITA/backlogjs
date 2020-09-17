import { BaseError } from "./BaseError";
import { ErrorCode } from "./ErrorCode";

/**
 * スペースの容量制限を超える場合のエラー
 */
export class SpaceOverCapacityError extends BaseError {
    /**
     * コンストラクタ
     * @param message エラーメッセージ 
     * @param moreInfo 詳細情報
     */
    constructor(message: string, moreInfo: string) {
        super(message, ErrorCode.SpaceOverCapacityError, moreInfo);
    }
}
