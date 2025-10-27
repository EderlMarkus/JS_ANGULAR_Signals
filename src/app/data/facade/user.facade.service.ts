import { computed, inject, Injectable, signal } from '@angular/core';
import { UserService } from '../services/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, shareReplay } from 'rxjs';
import { PhotoService } from '../services/photo.service';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {
  private readonly _userService = inject(UserService);
  private readonly _photoService = inject(PhotoService);

  public readonly query = signal("");

  public getUsersSig = toSignal(
    this._userService.getUsers().pipe(
      shareReplay(1),
      map(users => users.map(user => {
        user.photo = this._photoService.getPhoto(user);
        return user;
      }))
    ), { initialValue: [] }
  )

  public filtered = computed(() => {
    const users = this.getUsersSig();
    const equalize = (string: String) => string.trim().toLowerCase();
    const query = equalize(this.query());
    return users.filter(user => equalize(user.name).includes(query))
  })
}
