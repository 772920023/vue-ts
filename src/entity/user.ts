/**
 * 导航菜单
 *
 * @author Hooks Zhang
 */
export interface Menu {
  id: number;
  // 菜单名称
  name: string;
  resourceType: string;
  // 路由 url，可以为空
  url?: string;
  permission: string;
  parentId: number;
  icon: string | null;
  weightValue: number;
  // 子菜单
  children: Array<Menu>;
}

export interface User {
  id: number;
  userName: string;
  password: string;
  name: string;
  email: string;
  mobilePhone: string;
  lastLoginTime: string;
  remark?: null;
  isPro: boolean;
  avatarFileId?: null;
  creatorId: number;
  updaterId: number;
  createTime: string;
  updateTime?: null;
  usable: number;
  disabled: number;
  roleIds?: number[] | null;
  roleNames?: null;
  menu: Menu;
  permissions?: string[] | null;
  loginName: string;
  phone: string;
  newPassword: string;
}

export interface Role {
  id: number;
  roleName: string;
  remark: string;
  creatorId: number;
  updaterId: number;
  createTime: string;
  updateTime?: null;
  unavailable: number;
  disabled: number;
  permissionIds?: null;
}

export interface Admin {
  id: number;
  userName: string;
  name: string;
  email: string;
  mobilePhone: string;
  lastLoginTime: string;
  remark?: null;
  avatarFileId?: null;
  avatarFile?: null;
  createTime: string;
  updateTime?: null;
  usable: number;
  roleNames?: string[] | null;
}

export interface Permission {
  id: number;
  name: string;
  resourceType: string;
  url: string;
  permission: string;
  parentId: number;
  icon?: null;
  weightValue: number;
  children: Permission[] | null;
}
