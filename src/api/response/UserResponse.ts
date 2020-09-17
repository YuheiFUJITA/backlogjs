/**
 * ユーザー情報のレスポンス
 */
export interface UserResponse {
    /**
     * 内部ID（固定）
     */
    id: number;
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
