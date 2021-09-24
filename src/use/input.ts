import { Callback } from '@/types/utils'

export const useInput: Callback<any> = () => {
  const pasteText = (event: any): Array<string> => {
    const arr = event.clipboardData.getData('text').split('\n')

    return arr.filter((data: string) => data !== '')
  }

  const prevent = (input: HTMLInputElement) => {
    input.addEventListener('keydown', (event: Event) => {
      // TODO: Edge and IE11 insert in a / event
      // event.stopPropagation()
    })
  }

  return { pasteText, prevent }
}