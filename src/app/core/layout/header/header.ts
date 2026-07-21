import { Component, inject, linkedSignal } from '@angular/core';
import { UserTokenStore } from '../../services/user-token-store';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserInfosStore } from '../../services/user-infos-store';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly _userTokenStore = inject(UserTokenStore);
  private readonly _router = inject(Router);
  readonly _userInfosStore = inject(UserInfosStore);

  navigateEnd = toSignal(
    this._router.events.pipe(filter((event) => event instanceof NavigationEnd)),
  );

  isMenuOpen = linkedSignal({
    source: this.navigateEnd,
    computation: () => false,
  });

  toggleMenu() {
    this.isMenuOpen.update((currentValue) => !currentValue);
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
