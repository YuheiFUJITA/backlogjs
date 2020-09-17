import { UserRequest } from "./request/userRequest";
import { UserResponse } from "./response/UserResponse";

export interface BacklogApiInterface {

    /**
     * ユーザー一覧の取得
     * @returns 取得したユーザー情報の一覧
     */
    getUsersFromSpace(): UserResponse[];

    /**
     * プロジェクトユーザー一覧の取得
     * @param projectIdOrKey プロジェクトのID または プロジェクトキー
     * @param excludeGroupMembers グループを介してプロジェクトに参加しているメンバーを除く
     * @returns プロジェクト内のユーザー情報の一覧
     */
    getUsersFromProject(projectIdOrKey: string, excludeGroupMembers: boolean): UserResponse[];

    /**
     * プロジェクト管理者一覧の取得
     * @param projectIdOrKey プロジェクトのID または プロジェクトキー
     * @returns プロジェクト管理者のユーザー情報一覧
     */
    getProjectAdministratorFromProject(projectIdOrKey: string): UserResponse[];

    /**
     * ユーザー情報の取得
     * @param id ID
     * @returns 取得したユーザー情報
     */
    getUser(id: number): UserResponse;

    /**
     * 認証ユーザー情報の取得
     * @returns 取得した認証ユーザー情報
     */
    getMySelf(): UserResponse;

    /**
     * ユーザーの追加
     * @param user ユーザー情報
     * @returns 追加したユーザー情報
     */
    addUserToSpace(user: UserRequest): UserResponse;

    /**
     * プロジェクトユーザーの追加
     * @param projectIdOrKey プロジェクトのID または プロジェクトキー
     * @param id 追加するユーザーのID
     * @returns 追加したユーザー情報
     */
    addUserToProject(projectIdOrKey: string, id: number): UserResponse;

    /**
     * プロジェクト管理者の追加
     * @param projectIdOrKey プロジェクトのID または プロジェクトキー
     * @param id 追加するユーザーのID
     * @returns 追加したプロジェクト管理者のユーザー情報
     */
    addProjectAdminRole(projectIdOrKey: string, id: number): UserResponse;

    /**
     * ユーザーの更新
     * @param id ID
     * @param user ユーザー情報
     * @returns 更新後のユーザー情報
     */
    updateUser(id: number, user: UserRequest): UserResponse;

    /**
     * ユーザーの削除
     * @param id ID
     * @returns 削除したユーザー情報
     */
    deleteUser(id: number): UserResponse;

    /**
     * プロジェクトユーザーの削除
     * @param projectIdOrKey プロジェクトのID または プロジェクトキー
     * @param id 削除するユーザーのID
     * @returns 削除したユーザー情報
     */
    removeUserFromProgect(projectIdOrKey: string, id: number): UserResponse;

    /**
     * プロジェクト管理者の削除
     * @param projectIdOrKey プロジェクトのID または プロジェクトキー
     * @param id プロジェクト管理者権限を削除されたユーザー情報
     */
    removeProjectAdminRole(projectIdOrKey: string, id: number): UserResponse;
}
