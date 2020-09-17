/**
 * ユーザー情報のリクエスト
 */
export interface UserRequest {
    /**
     * ユーザーID（可変）
     */
    userId: string;
    /**
     * ユーザー名
     */
    name: string;
    /**
     * 権限
     */
    roleType: number;
    /**
     * 設定言語
     */
    lang: string;
    /**
     * メールアドレス
     */
    mailAddress: string;
}
