import { BaseError } from "./BaseError";
import { ErrorCode } from "./ErrorCode";

/**
 * 制限サイズを超えるファイルがアップロードされた場合のエラー
 */
export class TooLargeFileError extends BaseError {
    /**
     * コンストラクタ
     * @param message エラーメッセージ 
     * @param moreInfo 詳細情報
     */
    constructor(message: string, moreInfo: string) {
        super(message, ErrorCode.TooLargeFileError, moreInfo);
    }
}
