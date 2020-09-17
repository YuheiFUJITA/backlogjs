import Axios, { AxiosInstance } from "axios";
import { BacklogApiInterface } from "./BacklogApiInterface";
import { UserRequest } from "./request/userRequest";
import { UserResponse } from "./response/UserResponse";

export class BacklogApiRepository implements BacklogApiInterface {
    private axios: AxiosInstance;

    /**
     * コンストラクタ
     * @param spaceName スペース名
     * @param dmain ドメイン
     * @param apiKey APIキー
     */
    constructor(spaceName: string, dmain: 'jp'|'com', apiKey: string) {
        this.axios = Axios.create({
            baseURL: `${spaceName}.backlog.${dmain}/api/v2`,
            params: {
                apiKey
            }
        });
    }

    getUsersFromSpace(): UserResponse[] {
        throw new Error("Method not implemented.");
    }
    getUsersFromProject(projectIdOrKey: string, excludeGroupMembers: boolean): UserResponse[] {
        throw new Error("Method not implemented.");
    }
    getProjectAdministratorFromProject(projectIdOrKey: string): UserResponse[] {
        throw new Error("Method not implemented.");
    }
    getUser(id: number): UserResponse {
        throw new Error("Method not implemented.");
    }
    getMySelf(): UserResponse {
        throw new Error("Method not implemented.");
    }
    addUserToSpace(user: UserRequest): UserResponse {
        throw new Error("Method not implemented.");
    }
    addUserToProject(projectIdOrKey: string, id: number): UserResponse {
        throw new Error("Method not implemented.");
    }
    addProjectAdminRole(projectIdOrKey: string, id: number): UserResponse {
        throw new Error("Method not implemented.");
    }
    updateUser(id: number, user: UserRequest): UserResponse {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: number): UserResponse {
        throw new Error("Method not implemented.");
    }
    removeUserFromProgect(projectIdOrKey: string, id: number): UserResponse {
        throw new Error("Method not implemented.");
    }
    removeProjectAdminRole(projectIdOrKey: string, id: number): UserResponse {
        throw new Error("Method not implemented.");
    }

}
