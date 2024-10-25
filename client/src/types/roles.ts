export type UserRole = 'User' | 'Admin' | 'SuperAdmin';

export interface User {
  id: number;
  kullaniciadi: string;
  rol: UserRole;
  yoneticiadi: string;
}