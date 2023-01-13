import { SetMetadata } from '@nestjs/common';

export enum ROLES {
  ADMIN = '1',
  PRIMARY_USER = '2',
  SECONDARY_USER = '3'
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: ROLES[]) => SetMetadata(ROLES_KEY, roles);
