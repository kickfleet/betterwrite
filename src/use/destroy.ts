import { Callback } from '@/types/utils'
import { useLocalStorage } from './storage/local'
import { Store } from 'vuex'

export const useDestroy = (store: Store<any>) => {
  const init: Callback<any> = () => {
    useLocalStorage(store).onSaveProject()
  }

  return { init }
}
