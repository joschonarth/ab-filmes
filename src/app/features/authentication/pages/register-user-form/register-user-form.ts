import { Component, computed, effect, inject, signal } from '@angular/core';
import { email, Field, form, minLength, required } from '@angular/forms/signals';
import { confirmPassword } from '../../validators/confirm-password';
import { IRegisterParams } from '../../../../shared/models/register-params';
import { UserApi } from '../../../../core/services/user-api';
import { rxResource } from '@angular/core/rxjs-interop';
import { setErrorMessage } from '../../../../shared/utils/set-error-message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user-form',
  imports: [Field],
  templateUrl: './register-user-form.html',
  styleUrl: './register-user-form.css',
})
export class RegisterUserForm {
  private readonly _userApi = inject(UserApi);
  private readonly _router = inject(Router);

  registerModel = signal<IRegisterParams>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  registerForm = form(this.registerModel, (fieldPath) => {
    required(fieldPath.name, { message: 'O nome é obrigatório.' });
    email(fieldPath.email, { message: 'O e-mail é inválido.' });

    required(fieldPath.password, { message: 'A senha é obrigatória.' });
    minLength(fieldPath.password, 8, { message: 'A senha deve ter no mínimo 8 caracteres.' });

    confirmPassword(fieldPath.confirmPassword, fieldPath.password);
  });

  registerParams = signal<IRegisterParams | undefined>(undefined);

  registerResource = rxResource({
    params: () => this.registerParams(),
    stream: ({ params }) => this._userApi.register(params.name, params.email, params.password),
  });

  constructor() {
    effect(() => {
      const wasRegistered = this.registerResource.hasValue();

      if (wasRegistered) {
        setTimeout(() => {
          this._router.navigate(['/login']);
        }, 1000);
      }
    });
  }

  registerError = computed(() => setErrorMessage(this.registerResource.error()));

  successMessage = computed(() => {
    const SUCCESS_REGISTRATION = this.registerResource.hasValue();

    return SUCCESS_REGISTRATION ? 'Usuário cadastrado com sucesso!' : undefined;
  });

  register() {
    const userInfos = this.registerForm().value();

    this.registerParams.set(userInfos);
  }
}
