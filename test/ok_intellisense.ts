import { ReturnTypes, ParamsTypes } from '../build_types/methods'

const invoke = <T extends keyof ParamsTypes>(
  method: T,
  params: ParamsTypes[T]
): Promise<ReturnTypes[T]> => {
  return Promise.resolve(null)
}

invoke<'auth.sendCode'>('auth.sendCode', {
  phone_n
})