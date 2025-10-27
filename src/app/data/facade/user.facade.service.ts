import { computed, inject, Injectable, signal } from '@angular/core';
import { UserService } from '../services/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {
  private readonly _userService = inject(UserService);

  public readonly query = signal("");

  public getUsersSig = toSignal(
    this._userService.getUsers().pipe(shareReplay(1)), { initialValue: [] }
  )

  public filtered = computed(() => {
    const users = this.getUsersSig();
    const equalize = (string: String) => string.trim().toLowerCase();
    const query = equalize(this.query());
    return users.filter(user => equalize(user.name).includes(query))
  })
}
