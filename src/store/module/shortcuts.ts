import { ShortcutsState } from '@/types/shortcuts'
import { useDefines } from '@/use/defines'

export default {
  namespaced: true,
  state: () =>
    ({
      localSaveProject: useDefines().shortcuts('localSaveProject'),
      localLoadProject: useDefines().shortcuts('localLoadProject'),
      newProject: useDefines().shortcuts('newProject'),
      newChapter: useDefines().shortcuts('newChapter'),
      deleteChapter: useDefines().shortcuts('deleteChapter'),
      generatePDF: useDefines().shortcuts('generatePDF'),
    } as ShortcutsState),
  mutations: {},
  actions: {},
  getters: {},
}