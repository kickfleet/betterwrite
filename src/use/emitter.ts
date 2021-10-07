import { getCurrentInstance, ComponentInternalInstance } from 'vue'

export default function useEmitter() {
  const internalInstance = getCurrentInstance()
  const emitter = (internalInstance as ComponentInternalInstance).appContext
    .config.globalProperties.emitter

  return emitter
}
