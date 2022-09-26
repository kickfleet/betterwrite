export type BetterWriteThemes =
  | 'BetterWrite - Light'
  | 'BetterWrite - Dark'
  | 'BetterWrite - Rise'
  | 'BetterWrite - Ascend'
  | 'BetterWrite - Harmonic'
  | 'BetterWrite - Infinity'
  | 'BetterWrite - Custom'

export interface EditorState {
  styles: EditorStateStyles
  configuration: EditorStateConfiguration
  actives: EditorStateActives
}

export interface EditorStateActivesEntity {
  index: number
}

export interface EditorStateActivesGlobalMouse {
  x: number
  y: number
  vertical: 'top' | 'bottom'
  horizontal: 'right' | 'left'
  validLastSelection: boolean
}

export interface EditorStateActivesGlobal {
  mouse: EditorStateActivesGlobalMouse
}

export interface EditorStateActives {
  entity: EditorStateActivesEntity
  global: EditorStateActivesGlobal
}

export interface EditorStateConfigurationEntity {
  insertEntityInParagraphBreakLine: boolean
}

export interface EditorStateConfigurationCommands {
  paragraph: {
    active: boolean
  }
  headingTwo: {
    active: boolean
  }
  headingThree: {
    active: boolean
  }
  pageBreak: {
    active: boolean
  }
  lineBreak: {
    active: boolean
  }
  image: {
    active: boolean
  }
  checkbox: {
    active: boolean
  }
  list: {
    active: boolean
  }
  dialogue: {
    active: boolean
  }
  drau: {
    active: boolean
  }
}

export interface EditorStateConfiguration {
  theme: BetterWriteThemes
  lang?: boolean
  draggable: boolean
  bars: boolean
  bottomBar: boolean
  transition: boolean
  autosave: boolean
  blocked: boolean
  entity: EditorStateConfigurationEntity
  commands: EditorStateConfigurationCommands
}

export interface EditorStateStyles {
  googleFontsInjection: boolean
  heading: EditorStateHeading
  text: EditorStateText
  base: EditorStateBase
}

export interface EditorStateBase {
  backgroundData: string
}

export interface EditorStateHeading {
  fontFamily: string
  fontWeight: number
}

export interface EditorStateText {
  fontFamily: string
  fontWeight: number
  fontSize: number
}
