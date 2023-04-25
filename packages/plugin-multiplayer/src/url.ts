import { PluginTypes } from 'better-write-types'

export const UrlKeySet = (
  emitter: PluginTypes.PluginEmitter,
  stores: PluginTypes.PluginStores,
  hooks: PluginTypes.PluginHooks
) => {
  emitter.on('call-editor-mounted', () => {
    const params = hooks.vueuse.core.useUrlSearchParams()

    const key = params?.liveshare

    if (key) {
      emitter.emit('plugin-presence-room-join', key)
    }
  })
}
