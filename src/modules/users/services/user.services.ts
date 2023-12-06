import {ApiClientService, EntityApiService, RequestConfig} from "@dfl/react-security";
import { IUser } from "modules/users/interfaces/IUser";
import {IRoleSetting} from "modules/users/interfaces/IRoleSetting";

class UserService extends EntityApiService<IUser> {

    getUserWhitTransformRoles = (id: string, config?: RequestConfig | undefined) => {
        return this.getOne(id, config).then((data) => {
            data.roles = (data.roles as IRoleSetting[])?.map(({role}) => role);
            return data;
        })
    }

  updatePassword = (
    _id: string | undefined,
    lastPassword: string,
    password: string,
    confirm: string,
  ) => {
    if (_id && lastPassword && password && confirm) {
      return this.handleResponse(
        ApiClientService.post(this.getPath("/local-security"), {
          _id,
          lastPassword,
          password,
          confirm,
        }),
      );
    }

    return Promise.reject({
      message: "You must need a _id, lastPassword, password and confirm",
    });
  };

  resetPassword = (
    _id: string | undefined,
    password: string,
    confirm: string,
    changePasswordRequire: boolean,
  ) => {
    if (_id && password && confirm) {
      return this.handleResponse(
        ApiClientService.post(this.getPath("/password-reset"), {
          _id,
          password,
          confirm,
          changePasswordRequire,
        }),
      );
    }

    return Promise.reject({
      message: "You must need a _id, lastPassword, password and confirm",
    });
  };

  addRoles = (userId: string | undefined, roles: string[]) => {
    if (userId && roles) {
      if (roles.length)
        return this.handleResponse(
          ApiClientService.patch(this.getPath(`/${userId}`), {
            _id: userId,
            roles,
          }),
        );
      return Promise.resolve();
    }
    return Promise.reject({
      message: "You must need an userId and a list of roles",
    });
  };

  updateAvatar = (avatar: string | undefined, userId: string | undefined) => {
    if (userId && avatar) {
      return this.handleResponse(
        ApiClientService.patch(this.getPath(`/${userId}`), {
          _id: userId,
          avatar,
        }),
      );
    }
    return Promise.reject({
      message: "You must need an userId and an avatar",
    });
  };
}

export default new UserService("/ms-auth/api/users");
