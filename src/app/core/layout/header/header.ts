import { Component, inject } from '@angular/core';
import { UserTokenStore } from '../../services/user-token-store';
import { Router } from '@angular/router';
import { UserInfosStore } from '../../services/user-infos-store';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly _userTokenStore = inject(UserTokenStore);
  private readonly _router = inject(Router);
  readonly _userInfosStore = inject(UserInfosStore);

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  getInitials(name: string | undefined): string {
    const normalizedName = name?.trim();
    if (!normalizedName) return '?';

    const initials = normalizedName
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join('');

    return initials || '?';
  }

  logout() {
    this._userTokenStore.removeToken();
    this._userInfosStore.removeUser();

    this._router.navigate(['/auth/login']);
  }
}
