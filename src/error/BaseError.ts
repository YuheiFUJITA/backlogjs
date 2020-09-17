import { ErrorCode } from "./ErrorCode";

/**
 * Backlog APIのエラーレスポンスのベースクラス
 */
export class BaseError extends Error {

    /**
     * コンストラクタ
     * @param e エラーメッセージ
     * @param code エラーコード
     * @param moreInfo 詳細情報
     */
    constructor(public readonly e: string, public readonly code: ErrorCode, public readonly moreInfo: string) {
        super(e);
        this.name = new.target.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
